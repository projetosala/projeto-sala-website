import axios from 'axios';

const baseUrl = process.env.BLOGGER_BASE_URL;
const blogId = process.env.BLOGGER_BLOG_ID;
const apiKey = process.env.BLOGGER_API_KEY;

export async function getPosts() {
  const limit = 5;
  const url = `${baseUrl}/blogs/${blogId}/posts?key=${apiKey}&maxResults=${limit}`;

  try {
    const { status, data } = await axios.get(url);

    return status === 200 ? data.items : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getProjectHistoryPost() {
  const id = process.env.PROJECT_HISTORY_ID;
  const url = `${baseUrl}/blogs/${blogId}/posts/${id}?key=${apiKey}`;

  try {
    const { status, data } = await axios.get(url);

    return status === 200 ? data : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
