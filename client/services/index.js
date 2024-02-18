import axios from "axios";

// Get People
export async function getAllPeople() {
  try {
    const { data } = await axios.get(`/`);
    return data;
  } catch (error) {
    return error;
  }
}
// Vote Person
export async function votePerson(body) {
  try {
    const { data } = await axios.put(`/`, body);
    console.log("🚀 ~ votePerson ~ data:", data);
    return data;
  } catch (error) {
    return error;
  }
}
