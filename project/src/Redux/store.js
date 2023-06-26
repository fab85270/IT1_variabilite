import { createStore } from 'redux';

// Reducer pour gérer l'état de connexion
const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        username: action.payload.username,
        email: action.payload.email,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        username: '',
        email: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

// Création du store avec le reducer
const store = createStore(loginReducer);

export default store;