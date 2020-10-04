import { UserActionsTypes } from './user-actions-types';
//corresponding to what userReducer is expecting
export const setCurrentUser = user => ({
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
  });