import apiClient from './axiosconfig';

/**
 * Submit project enquiry to the backend
 * @param {Object} formData
 * @returns {Promise<{ success: boolean, message?: string, error?: string, fieldErrors?: Record<string, string> }>}
 */
export const submitContactEnquiry = async (formData) => {
  try {
    const response = await apiClient.post('/api/contact', formData, {
      timeout: 10000 // 10s timeout
    });
    return {
      success: true,
      message: response.data.message || 'Thank you! Your project enquiry has been received.',
      deliveryStatus: response.data.deliveryStatus
    };
  } catch (err) {
    if (err.code === 'ECONNABORTED' || err.message?.includes('timeout')) {
      return {
        success: false,
        error: 'The request timed out. Please check your network connection and try again.'
      };
    }

    if (!err.response) {
      return {
        success: false,
        error: 'Network error: Unable to reach the server. Please check your internet connection or email directly at hello@pardeep-shyoran.me.'
      };
    }

    const { status, data } = err.response;

    if (status === 429) {
      return {
        success: false,
        error: data?.error || 'Too many submissions. Please wait a few minutes before trying again.'
      };
    }

    if (status === 400) {
      return {
        success: false,
        error: data?.error || 'Please correct the highlighted errors in the form.',
        fieldErrors: data?.fieldErrors || {}
      };
    }

    return {
      success: false,
      error: data?.error || 'A server error occurred while sending your enquiry. Please try again or email directly.'
    };
  }
};
