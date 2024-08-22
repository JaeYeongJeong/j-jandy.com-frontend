let apiUrl = 'https://localhost:8080';

if (import.meta.env.VITE_API_URL) {
  apiUrl = '/api/' + import.meta.env.VITE_API_URL;

  if (apiUrl.endsWith('/')) {
    apiUrl = apiUrl.replace(/\/$/, '');
  }
}

export default apiUrl;
