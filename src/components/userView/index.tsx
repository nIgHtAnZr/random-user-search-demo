import React, { FC } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Col xs={4}>
      <Card>
        <Image src={imageUrl} />
        <Card.Body>
          <Card.Text>{`${t('Name')}: ${firstName} ${lastName}`}</Card.Text>
          <Card.Text>
            {t('City')}: {city}
          </Card.Text>
          <Card.Text>
            {t('Dob')}: {dob}
          </Card.Text>
          <Card.Text>
            {t('Age')}: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserView;
