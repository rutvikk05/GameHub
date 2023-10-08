import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "75beefd2dcb9466cae8fa321fc3de261",
  },
});
