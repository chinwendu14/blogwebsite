import axios from "axios";

export const blogApi = async () => {
  try {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response;
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
