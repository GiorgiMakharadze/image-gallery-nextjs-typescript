"use client";

import { Button } from "react-bootstrap";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      <h1>Error</h1>
      <h1>Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
};

export default error;
