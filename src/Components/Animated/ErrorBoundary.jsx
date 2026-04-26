import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error in Animatecounter:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong in this section.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
