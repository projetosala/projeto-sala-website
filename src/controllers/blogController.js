import axios from 'axios';

export default async function getPosts() {
  const baseUrl = process.env.BLOGGER_BASE_URL;
  const blogId = process.env.BLOGGER_BLOG_ID;
  const apiKey = process.env.BLOGGER_API_KEY;
  const limit = 5;
  const url = `${baseUrl}/blogs/${blogId}/posts?key=${apiKey}&maxResults=${limit}`;

  try {
    const { status, data } = await axios.get(url);

    return status === 200 ? data.items : null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
}
