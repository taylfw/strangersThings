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

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username: username,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username: username,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPost(title, description, user, token) {
  try {
    const { data } = await axios.post(
      `${BASE}/posts`,
      {
        user: {
          title: title,
          description: description,
        },
      },
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}
