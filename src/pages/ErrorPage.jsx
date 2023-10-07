import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-navy-blue font-bold text-4xl mb-4">Oops! Something Went Wrong</h1>
      <p className="text-navy-blue text-lg mb-4 text-center">We apologize for the inconvenience. Please try again later. <br />The page you are looking for might have been removed, had its name changed, or be temporarily unavailable.</p>
      <img src="https://i.ibb.co/1ZnBLSd/error.jpg" alt="Error Image" className="max-w-full" />
        <button><Link to="/" className="btn bg-lavender test-navy-blue text-white">Go back</Link></button>
    </div>
  );
};

export default ErrorPage;
