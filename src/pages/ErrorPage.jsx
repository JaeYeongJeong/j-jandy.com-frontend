export default function ErrorPage(error) {
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>Sorry, an unexpected error occurred. Please try again later.</p>
    </div>
  );
}
