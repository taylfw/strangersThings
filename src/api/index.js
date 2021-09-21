import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT";

// this is an example for an api call with axios

export async function getPosts() {
  try {
    const { data } = await axios.get(`${BASE}/posts`);
    return data;
  } catch (error) {
    throw error;
  }
}
