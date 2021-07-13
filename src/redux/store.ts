import { createStore } from 'redux';
import { usersReducer } from './reducers/userReducer';

export const store = createStore(usersReducer);
