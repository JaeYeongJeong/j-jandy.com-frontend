let apiUrl = 'https://localhost:8080';

if (import.meta.env.VITE_API_URL) {
  apiUrl = '/api';

  if (apiUrl.endsWith('/')) {
    apiUrl = apiUrl.replace(/\/$/, '');
  }
}

export default apiUrl;
