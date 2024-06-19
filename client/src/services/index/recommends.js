import axios from "axios";

export const getAllRecommends = async (searchKeyword = "", page = 1, limit = 10) => {
  try {
    const { data, headers } = await axios.get(
      `/api/recommends?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getSingleRecommend = async ({ slug }) => {
  try {
    const { data } = await axios.get(`/api/recommends/${slug}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const deleteRecommend = async ({ slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(`/api/recommends/${slug}`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateRecommend = async ({ updatedData, slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(`/api/recommends/${slug}`, updatedData, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const createRecommend = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(`/api/recommends`, {}, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

