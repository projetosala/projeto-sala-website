export default function shortPostContent(postContent, limit = 150) {
  const shortContent = postContent.slice(0, limit);
  return `${shortContent}...`;
}
