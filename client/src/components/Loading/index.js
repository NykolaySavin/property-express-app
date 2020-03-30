import React from 'react';
import { Spinner} from 'react-bootstrap';

export default function Loading() {
  return (
    <div className="text-center m-4">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
