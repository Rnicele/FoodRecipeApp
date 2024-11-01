// src/ErrorBoundary.jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    // Redirect to 404.html immediately
    window.location.href = "/404.html";
  }

  render() {
    if (this.state.hasError) {
      return null; // This will not render anything after the redirect
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
