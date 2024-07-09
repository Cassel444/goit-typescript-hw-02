import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = '-ZIFgbI2tAYjpR9FusyEXve1kiBXIRLao2OMbZQoz7g';

async function fetchPhotos(searchQuery, page) {
    const response = await axios.get('/search/photos', {
        params: {
            client_id: ACCESS_KEY,
            query: searchQuery,
            page,
        },
    });
    return response.data.results;
}
export default fetchPhotos;
