export default function shortPostContent(postContent) {
  const limit = 150;
  const shortContent = postContent.slice(0, limit);

  return `${shortContent}...`;
}
