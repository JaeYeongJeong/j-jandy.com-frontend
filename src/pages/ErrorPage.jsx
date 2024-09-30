import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>Sorry, an unexpected error occurred. Please try again later.</p>
    </div>
  );
}
