import React, { FC } from 'react';
import { Card, Col, Image } from 'react-bootstrap';

interface UserViewProps {
  firstName: string;
  lastName: string;
  city: string;
  dob: string;
  imageUrl: string;
  age?: number | string;
}

const UserView: FC<UserViewProps> = ({
  firstName,
  lastName,
  city,
  dob,
  imageUrl,
  age,
}) => {
  return (
    <Col xs={4}>
      <Card>
        <Image src={imageUrl} />
        <Card.Body>
          <Card.Text>{`Name: ${firstName} ${lastName}`}</Card.Text>
          <Card.Text>City: {city}</Card.Text>
          <Card.Text>Dob: {dob}</Card.Text>
          <Card.Text>Age: {age}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserView;
