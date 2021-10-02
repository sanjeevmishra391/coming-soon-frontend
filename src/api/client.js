import { create } from "apisauce";

const client = create({
  baseURL: "http://localhost:3050",
  withCredentials: false,
  timeout: 50000,
});

const get = client.get;
client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  return response;
};

export default client;
