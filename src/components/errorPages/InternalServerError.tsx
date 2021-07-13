import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const InternalServerError = () => {
  const history = useHistory();
  return (
    <div className="col-md-12 mt-2">
      <h5>Internal Server Error</h5>
      <h6>Please try again later</h6>
      <Button className="btn btn-primary" onClick={() => history.goBack()}>
        Go Back To Search
      </Button>
    </div>
  );
};

export default InternalServerError;
