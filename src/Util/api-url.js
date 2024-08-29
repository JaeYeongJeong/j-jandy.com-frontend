let apiUrl = 'https://localhost:8080';
let s3BucketUrl = 'https://jaey0394-test.s3.ap-northeast-2.amazonaws.com'

if (import.meta.env.VITE_API_URL) {
  apiUrl = '/api';

  if (apiUrl.endsWith('/')) {
    apiUrl = apiUrl.replace(/\/$/, '');
  }
}

export default apiUrl;
export { s3BucketUrl };
