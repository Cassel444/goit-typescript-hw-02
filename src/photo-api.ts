import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY: string = "-ZIFgbI2tAYjpR9FusyEXve1kiBXIRLao2OMbZQoz7g";

export interface Photo {
  id: string;
  description: string | null;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
}
interface Response {
  results: Photo[];
}

async function fetchPhotos(
  searchQuery: string,
  page: number
): Promise<Photo[]> {
  const response = await axios.get<Response>("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
    },
  });
  return response.data.results;
}
export default fetchPhotos;
