import React from "react";
import { Alert } from "react-bootstrap";

export default function Error({ error }) {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.statusCode === 400
  ) {
    return <Alert variant="danger">{error.response.data.message}</Alert>;
  }
  return <Alert variant="danger">{error.message}</Alert>;
}
