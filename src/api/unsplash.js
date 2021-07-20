import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID om-q_XLv8Z0f6Pyj6-UMaaMb1Tj118hEjlLQ9aVI_7Q",
  },
});
