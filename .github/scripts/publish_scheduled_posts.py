#!/usr/bin/env python3

from __future__ import annotations

import re
from datetime import datetime, timezone
from pathlib import Path


POSTS_DIR = Path("_posts")
FRONT_MATTER_RE = re.compile(r"\A---\n(.*?)\n---\n", re.DOTALL)
PUBLISH_DATE_RE = re.compile(r'^publish_date:\s*["\']?([^"\']+)["\']?\s*$', re.MULTILINE)
DRAFT_RE = re.compile(r"^(draft:\s*)(true|false)(\s*)$", re.MULTILINE | re.IGNORECASE)


def parse_publish_date(raw_value: str) -> datetime:
    normalized = raw_value.strip()
    if normalized.endswith("Z"):
        normalized = normalized[:-1] + "+00:00"

    parsed = datetime.fromisoformat(normalized)
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc)


def publish_due_posts() -> list[str]:
    updated_files: list[str] = []
    now = datetime.now(timezone.utc)

    for path in sorted(POSTS_DIR.glob("*.md")):
        content = path.read_text(encoding="utf-8")
        front_matter_match = FRONT_MATTER_RE.match(content)
        if not front_matter_match:
            continue

        front_matter = front_matter_match.group(1)
        draft_match = DRAFT_RE.search(front_matter)
        if not draft_match:
            continue

        # Safety guard: only publish posts that are still explicitly drafts.
        if draft_match.group(2).lower() != "true":
            continue

        publish_date_match = PUBLISH_DATE_RE.search(front_matter)
        if not publish_date_match:
            continue

        publish_at = parse_publish_date(publish_date_match.group(1))
        if publish_at > now:
            continue

        updated_front_matter = DRAFT_RE.sub(r"\1false\3", front_matter, count=1)
        if updated_front_matter == front_matter:
            continue

        updated_content = content.replace(front_matter, updated_front_matter, 1)
        path.write_text(updated_content, encoding="utf-8")
        updated_files.append(path.as_posix())

    return updated_files


if __name__ == "__main__":
    changed = publish_due_posts()
    if changed:
        print("Published posts:")
        for file_path in changed:
            print(file_path)
    else:
        print("No posts to publish.")
