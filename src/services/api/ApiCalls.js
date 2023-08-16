import axios, { get } from 'axios';
import { settings as s } from '../Settings';

const getUrl = async ep => {
  return `${s.baseUrl}${ep}`;
};

export const getData = async (relativeUrl, token) => {
  const url = await getUrl(relativeUrl, token);
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
      // Authorization: `Token ${token}`
    }
  };
  console.log(url, options);
  try {
    const response = await get(url, options).then(res => res);
    return { status: response.status, data: response.data };
  } catch (err) {
    if (err.response) {
      return { status: err.response.status, data: [] };
    }
    return { status: 0, data: [] };
  }
};

export const getDataAnonymously = async relativeUrl => {
  const url = await getUrl(relativeUrl);
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*'
    }
  };
  try {
    const response = await get(url, options).then(res => res);
    return { status: response.status, data: response.data };
  } catch (err) {
    if (err.response) {
      return { status: err.response.status, data: [] };
    }
    return { status: 0, data: [] };
  }
};

export const postDataLogin = async (relativeUrl, data, token) => {
  const url = relativeUrl;
  const config = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
      // Authorization: `Token ${token}`
    }
  };
  if (data) {
    config.data = JSON.stringify(data);
  }
  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const postData = async (relativeUrl, data, token) => {
  const url = await getUrl(relativeUrl);
  console.log(url);
  const config = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
      // Authorization: `Token ${token}`
    }
  };
  if (data) {
    config.data = JSON.stringify(data);
  }
  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const postDataAnonymously = async (relativeUrl, data) => {
  const url = await getUrl(relativeUrl);
  const config = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  };
  console.log(url);
  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const postFormData = async (relativeUrl, data) => {
  const url = await getUrl(relativeUrl);
  console.log('url', url);
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json, text/plain, */*'
    },
    data
  };

  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const patchFormData = async (relativeUrl, data, token) => {
  const url = await getUrl(relativeUrl);
  const config = {
    method: 'patch',
    url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',
      Authorization: `Token ${token}`
    },
    data
  };

  const response = await fetch(config.url, {
    method: 'PATCH', // or 'PUT'
    headers: { ...config.headers },
    body: config.data
  });
  if (response.status === 200) {
    const _data = {
      data: await response.json(),
      status: response.status
    };
    return _data;
  } else {
    return { status: null };
  }

  // try {
  //   const response = await axios(config)
  //     .then(res => res)
  //     .catch(error => error);
  //   return response;
  // } catch (err) {
  //   return { status: null };
  // }
};

export const resetPassword = async (relativeUrl, data) => {
  const url = await getUrl(relativeUrl);
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json-patch+json',
      Accept: '*/*'
    },
    data: JSON.stringify(data)
  };

  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const postFile = async (relativeUrl, data) => {
  const url = await getUrl(relativeUrl);
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json-patch+json',
      Accept: '*/*'
    },
    data: JSON.stringify(data)
  };

  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const putData = async (relativeUrl, data) => {
  const url = await getUrl(relativeUrl);

  const config = {
    method: 'put',
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ ...data })
  };

  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const putFormData = async (relativeUrl, data) => {
  const url = await getUrl(relativeUrl);

  const config = {
    method: 'put',
    url,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: '*/*'
    },
    data
  };

  try {
    const response = await axios(config)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};

export const deleteData = async relativeUrl => {
  const url = await getUrl(relativeUrl);

  const options = {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Accept: '*/*'
    }
  };

  try {
    const response = await axios
      .delete(url, options)
      .then(res => res)
      .catch(error => error);
    return response;
  } catch (err) {
    return { status: null };
  }
};
