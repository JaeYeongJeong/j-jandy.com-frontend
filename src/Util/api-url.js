let apiUrl = 'https://localhost:8080';
let s3BucketUrl = 'https://localhost:8080';

if (import.meta.env.VITE_API_URL) {
  apiUrl = import.meta.env.VITE_API_URL;

  if (apiUrl.endsWith('/')) {
    apiUrl = apiUrl.replace(/\/$/, '');
  }
}

if (import.meta.env.VITE_S3_URL) {
  s3BucketUrl = import.meta.env.VITE_S3_URL;
}

export default apiUrl;
export { s3BucketUrl };
