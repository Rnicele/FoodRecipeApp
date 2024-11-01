// src/ErrorBoundary.jsx
import React, { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// Helper component to trigger navigation from the ErrorBoundary
function RedirectToError() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/error"); // Redirect to the error page
  }, [navigate]);
  return null;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger the redirect
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error information here if needed
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <RedirectToError />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
