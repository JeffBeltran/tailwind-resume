const _ = require("lodash");
let axios = require("axios");
axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.API_TOKEN}`;

export async function getAllDegrees() {
  try {
    const response = await axios.get("/degrees?include=institution");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
