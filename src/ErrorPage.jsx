import React from "react";
import "./Error.css";
const ErrorPage = () => {
  return (
    <div className="error">
      <img src="error.jpg" alt="error page" />
      <h1>404 - Page Not Found</h1>
      <p>
        The resource you are looking for is unavailable or an error occurred.
      </p>
    </div>
  );
};

export default ErrorPage;
