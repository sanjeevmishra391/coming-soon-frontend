import client from "./client";

const endpoint = "/users";

const register = (details) => {
  const response = client.post(endpoint + "/register", details);
  return response;
};

const getteam = (p, l = 12) => {
  const response = client.get(endpoint + `/getteam?p=${p}&l=${l}`);
  return response;
};

export default { register, getteam };
