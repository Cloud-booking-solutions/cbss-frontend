import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://cbss-backend.onrender.com/api'
  : 'https://cbss-frontend.onrender.com/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminAuth');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      console.log('Adding token to request:', config.url);
    } else {
      console.log('No token found for request:', config.url);
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => {
    console.log('Response received for:', response.config.url);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      console.log('Unauthorized request detected, clearing token');
      localStorage.removeItem('adminAuth');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Team API calls
export const getTeamMembers = async () => {
  try {
    const response = await api.get('/team');
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

// Gallery API calls
export const getGalleryItems = async (type) => {
  try {
    const response = await api.get(type ? `/gallery/type/${type}` : '/gallery');
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const addGalleryItem = async (type, itemData) => {
  try {
    const response = await api.post(`/gallery/${type}`, itemData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const updateGalleryItem = async (type, id, itemData) => {
  try {
    const response = await api.put(`/gallery/${type}/${id}`, itemData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const deleteGalleryItem = async (type, id) => {
  try {
    const response = await api.delete(`/gallery/${type}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

// Blog API calls
export const getBlogs = async () => {
  try {
    const response = await api.get('/blog');
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const createBlog = async (blogData) => {
  try {
    console.log('Sending blog data:', blogData);
    
    // Create the request body with only required fields
    const requestData = {
      title: blogData.title,
      excerpt: blogData.excerpt,
      content: blogData.content,
      image: blogData.image
    };

    // Make the request
    const response = await api.post('/blog', requestData);
    console.log('Server response:', response);
    return response.data;
  } catch (error) {
    // Log the full error for debugging
    console.error('Full error object:', error);
    console.error('Blog creation error details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });

    // Throw a more informative error
    throw {
      msg: error.response?.data?.message || error.response?.data?.msg || error.message || 'Server error',
      status: error.response?.status
    };
  }
};

export const updateBlog = async (id, blogData) => {
  try {
    const response = await api.put(`/blog/${id}`, blogData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await api.delete(`/blog/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

// Career API calls
export const getCareers = async () => {
  try {
    const response = await api.get('/career');
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

// Services API calls
export const getServices = async () => {
  try {
    const response = await api.get('/service');
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const addService = async (serviceData) => {
  try {
    const response = await api.post('/service', serviceData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const updateService = async (id, serviceData) => {
  try {
    const response = await api.put(`/service/${id}`, serviceData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export const deleteService = async (id) => {
  try {
    const response = await api.delete(`/service/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Server error' };
  }
};

export default api;
