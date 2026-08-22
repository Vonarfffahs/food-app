const postData = async (url, jsonData) => {
  const response = await axios.post(url, jsonData);

  return response;
};

const getResource = async (url) => {
  const response = await axios.get(url);

  return response;
};

export { postData, getResource };
