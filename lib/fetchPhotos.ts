import axios from "axios";

const ACCESS_KEY = process.env.EXPO_PUBLIC_ACCESS_KEY;

export const fetchPhotos = async () => {
  if (!ACCESS_KEY) {
    console.error("Unsplash API key is missing!");
    return [];
  }
  try {
    console.log("Fetching photos...");
    const response = await axios.get("https://api.pexels.com/v1/curated", {
      params: { per_page: 20 },
      headers: { Authorization: ACCESS_KEY },
    });
    console.log("Fetched Photos:", response.data);
    return response.data.photos;
  } catch (error: any) {
    console.error("Error fetching photos:", error.response?.data || error.message);
    return [];
  }
};
