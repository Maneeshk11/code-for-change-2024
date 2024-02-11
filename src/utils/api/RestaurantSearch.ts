import axios from "axios";

export const RestaurantSearch = async (query: string) => {
  try {
    const resp = await axios
      .get(`http://164.92.112.249:8000/restaurants?query=${query}`)
    return resp.data
  } catch (error) {
    return {};
  }
};
