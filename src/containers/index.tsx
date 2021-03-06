import React, { ReactNode } from 'react';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import LanguageSelector from '../components/LanguageSelector';
import LoadingSpinner from '../components/loader/LoadingSpinner';
import UserView from '../components/userView';
import useApi from '../hooks/useApi';
import {
  FETCH_AGE_DATA_FAIL,
  FETCH_AGE_DATA_REQUEST,
  FETCH_AGE_DATA_SUCCESS,
  FETCH_USER_SEARCH_DATA_FAIL,
  FETCH_USER_SEARCH_DATA_REQUEST,
  FETCH_USER_SEARCH_DATA_RESET,
  FETCH_USER_SEARCH_DATA_SUCCESS,
} from '../redux/actionTypes/userActions';
import { UsersState } from '../redux/reducers/userReducer';

const UserSearch = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const userData = useSelector<UsersState, UsersState>(state => state);
  const [fetchUserDataApi] = useApi();
  const [fetchUsersAgeApi] = useApi();
  const dispatch = useDispatch();

  const { usersData, usersDataLoading, ageForUsersLoading } = userData;

  const fetchUserData = () => {
    fetchUserDataApi(
      'https://randomuser.me/api/?results=3&inc=name,location,dob,picture&nat=gb',
      FETCH_USER_SEARCH_DATA_REQUEST,
      FETCH_USER_SEARCH_DATA_SUCCESS,
      FETCH_USER_SEARCH_DATA_FAIL,
      'GET'
    );
  };

  const fetchUsersAge = () => {
    const userNames = usersData.map(({ firstName }) => firstName);

    fetchUsersAgeApi(
      `https://api.agify.io/?${userNames
        .map((name, index) => `name[${index}]=${name}`)
        .join('&')}`,
      FETCH_AGE_DATA_REQUEST,
      FETCH_AGE_DATA_SUCCESS,
      FETCH_AGE_DATA_FAIL,
      'GET'
    );
  };

  const clearSearch = () => {
    dispatch({
      type: FETCH_USER_SEARCH_DATA_RESET,
    });
  };

  const renderUsers = (): ReactNode => {
    return usersData.map(
      ({ firstName, lastName, imageUrl, dob, city, age }) => (
        <UserView
          firstName={firstName}
          lastName={lastName}
          imageUrl={imageUrl}
          dob={dob}
          city={city}
          age={age}
        />
      )
    );
  };

  return (
    <div className="container p-3">
      <div className="row">
        <div className="container">
          <div className="float-left">
            <button
              className="mr-2"
              onClick={() => fetchUserData()}
              disabled={usersDataLoading || ageForUsersLoading}
            >
              {t('Search Random People')}
            </button>
            <button
              className="mr-2"
              onClick={() => fetchUsersAge()}
              disabled={
                !usersData?.length || usersDataLoading || ageForUsersLoading
              }
            >
              {t('Calculate Age')}
            </button>
            <button
              onClick={() => clearSearch()}
              disabled={
                !usersData?.length || usersDataLoading || ageForUsersLoading
              }
            >
              {t('Clear')}
            </button>
            {ageForUsersLoading && (
              <span className="ml-2">
                <Spinner animation="border" variant="primary" size="sm" />
              </span>
            )}
          </div>
          <div className="float-right">
            <LanguageSelector
              changeLanguage={(languageCode: string) =>
                changeLanguage(languageCode)
              }
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        {usersDataLoading ? <LoadingSpinner /> : renderUsers()}
      </div>
    </div>
  );
};

export default UserSearch;
