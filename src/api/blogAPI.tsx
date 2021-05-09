import axios from "axios";
import { StorySample } from "src/interfaces";

export async function getStories(): Promise<StorySample[]> {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const stories = await axios.get<StorySample[]>(url);
    const curatedStories = stories.data;
    return curatedStories;
  } catch (error) {
    throw new Error(error);
  }
}
