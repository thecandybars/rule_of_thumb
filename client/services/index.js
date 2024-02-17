import axios from "axios";

// GET AssetS
export async function getAllPeople() {
  try {
    const { data } = await axios.get(`/`);
    return data;
  } catch (error) {
    return error;
  }
}
