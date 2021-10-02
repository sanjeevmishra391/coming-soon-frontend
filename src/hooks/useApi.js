import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setError(!response.ok);
    setData(response.data.result);
    setLoading(false);
    return response;
  };
  return { data, error, loading, request };
};

export default useApi;
