import client from "./client";

export const addUser = async (userInfo) => {
  try {
    const data = await client.post("/auth/createuser", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const verifyUser = async (userInfo) => {
  try {
    const data = await client.post("/auth/signin", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const updateUser = async (userId, userInfo) => {
  try {
    const data = await client.put(`/auth/updateUser/${userId}`, userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const deleteUser = async (userId) => {
  try {
    const { message } = await client.delete(`/auth/deleteUser/${userId}`);
    return message;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getAllUsers = async () => {
  try {
    const data = await client.get("/auth/getUsers");
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
export const getUser = async (userId) => {
  try {
    const data = await client.get(`/auth/getuser/${userId}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const searchPhoneNumber = async (phoneNumber) => {
  try {
    const { data } = await client(
      `/auth/searchyPhoneNumber?phoneNumber=${phoneNumber}`
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
export const searchItem = async (query) => {
  try {
    const { data } = await client(`/auth/search?query=${query}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
