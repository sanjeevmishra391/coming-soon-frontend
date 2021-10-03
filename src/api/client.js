import { create } from "apisauce";

const client = create({
  // baseURL: "http://159.89.168.235:3050",
  baseURL: "https://comingsoon-backend.herokuapp.com",
  timeout: 60000,
});

const get = client.get;
client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  return response;
};

export default client;
