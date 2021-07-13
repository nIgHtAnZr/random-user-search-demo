import { AnyAction } from 'redux';

import {
  FETCH_USER_SEARCH_DATA_REQUEST,
  FETCH_USER_SEARCH_DATA_SUCCESS,
  FETCH_USER_SEARCH_DATA_FAIL,
  FETCH_USER_SEARCH_DATA_RESET,
  FETCH_AGE_DATA_REQUEST,
  FETCH_AGE_DATA_SUCCESS,
  FETCH_AGE_DATA_FAIL,
} from '../actionTypes/userActions';

export interface UserType {
  firstName: string;
  lastName: string;
  city: string;
  dob: string;
  imageUrl: string;
  age?: number | string;
}

export interface UsersState {
  usersDataLoading: boolean;
  usersData: any[] | [];
  usersDataError: any;
  ageForUsersLoading: boolean;
}

export interface AgeDataState {
  ageForUsers: any[] | [];
}

const INITIAL_STATE: UsersState = {
  usersDataLoading: false,
  usersData: [],
  usersDataError: null,
  ageForUsersLoading: false,
};

export const usersReducer = (
  state: UsersState = INITIAL_STATE,
  action: AnyAction
): UsersState => {
  switch (action?.type) {
    case FETCH_USER_SEARCH_DATA_REQUEST:
      return {
        ...state,
        usersDataLoading: true,
        usersData: [],
        usersDataError: null,
      };

    case FETCH_USER_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        usersDataLoading: false,
        usersData: organizeUserData(action?.payload?.results),
        usersDataError: null,
      };

    case FETCH_USER_SEARCH_DATA_FAIL:
      return {
        ...state,
        usersDataLoading: false,
        usersData: [],
        usersDataError: action?.payload,
      };

    case FETCH_AGE_DATA_REQUEST:
      return {
        ...state,
        ageForUsersLoading: true,
      };

    case FETCH_AGE_DATA_SUCCESS:
      return {
        ...state,
        ageForUsersLoading: false,
        usersData: addAgeForUsers(action?.payload, state.usersData),
      };

    case FETCH_AGE_DATA_FAIL:
      return {
        ...state,
        ageForUsersLoading: false,
      };

    case FETCH_USER_SEARCH_DATA_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};

const organizeUserData = (usersData: UsersState['usersData']) => {
  return usersData.map(({ dob, name, location, picture }) => ({
    firstName: name.first,
    lastName: name.last,
    city: location?.city,
    dob: new Date(dob?.date).toLocaleDateString('en-GB'),
    imageUrl: picture?.large,
  }));
};

const addAgeForUsers = (
  ageData: AgeDataState['ageForUsers'],
  usersData: UsersState['usersData']
) => {
  usersData?.forEach((userData: UserType) => {
    if (ageData?.length) {
      userData.age =
        ageData?.find(({ name }) => name === userData?.firstName)?.age || 'N/A';
    } else {
      userData.age = 'N/A';
    }
  });

  return usersData;
};
