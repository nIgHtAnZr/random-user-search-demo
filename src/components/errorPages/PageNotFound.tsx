import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const PageNotFound = () => {
  const history = useHistory();

  return (
    <div className="col-md-12">
      <Row className="justify-content-md-center">
        <Col className="code" md="auto">
          404
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text" md="auto">
          PAGE NOT FOUND
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Button className="btn btn-primary" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </Row>
    </div>
  );
};

export default PageNotFound;
