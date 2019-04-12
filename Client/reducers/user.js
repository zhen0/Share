import axios from "axios";

//action types

const ADD_USERS = "ADD_USERS";
const GETTING = "GETTING";
const LOOK_USER = "LOOK_USER";
const NEW_USER = "NEW_USER";
const ERRR = "ERRR";
const EDIT = "EDIT";

//action creators

const loadingPage = () => ({
  type: GETTING
});
const addAllUsers = data => ({
  type: ADD_USERS,
  data
});

const addLookUser = data => ({
  type: LOOK_USER,
  data
});

const updateUserForm = data => ({
  type: NEW_USER,
  data
});

const sendError = () => ({
  type: ERRR
});

const editLookUser = data => ({
  type: EDIT,
  data
});
//thunks
export const getAllUsers = () => {
  return async dispatch => {
    dispatch(loadingPage());
    try {
      const { data } = await axios.get("/api/users");
      dispatch(addAllUsers(data));
    } catch (err) {
      console.log("problem getting all users at userReducer: ", err);
    }
  };
};

export const getOneUser = id => {
  return async dispatch => {
    dispatch(loadingPage());
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      if (data === null) {
        dispatch(sendError());
      } else {
        dispatch(addLookUser(data));
      }
    } catch (err) {
      console.log("problem getting one user at userReducer: ", err);
    }
  };
};

export const editUser = (edits, id) => {
  return async dispatch => {
    dispatch(loadingPage());
    try {
      const { data } = await axios.put(`/api/users/${id}`, edits);

      // if (data === null) {
      //   dispatch(sendError());
      // } else {
      dispatch(editLookUser(data));
      // }
    } catch (err) {
      console.log("problem editing one user at userReducer: ", err);
    }
  };
};

export const sendUser = newUser => {
  return async dispatch => {
    try {
      console.log("sending");
      const { data } = await axios.post("/api/users/signup", newUser);

      dispatch(updateUserForm(data));
    } catch (err) {
      console.log("problem adding a new user at userReducer", err);
    }
  };
};

export const deleteUser = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/users/${id}`);
      dispatch(getAllUsers());
    } catch (err) {
      console.log("Problem deleting user in userReducer", err);
    }
  };
};

export const getMe = () => dispatch => {
  return axios
    .get("/users/me")
    .then(res => res.data)
    .then(user => dispatch(addLookUser(user)))
    .catch(console.error.bind(console));
};

//state
const initialState = {
  loading: false,
  users: {},
  lookUser: {},
  UserAdd: false,
  newUser: {},
  error: false
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
      return { ...state, loading: true };
    case ADD_USERS:
      return { ...state, loading: false, users: action.data };
    case LOOK_USER:
      return {
        ...state,
        loading: false,
        error: false,
        UserAdd: true,
        lookUser: action.data
      };
    case NEW_USER:
      return { ...state, UserAdd: false, newUser: action.data };
    case ERRR:
      return { ...state, loading: false, error: true };
    case EDIT:
      return {
        ...state,
        loading: false,
        error: false,
        UserAdd: false,
        lookUser: { kit: state.lookUser.kit, ...action.data }
      };
    default:
      return state;
  }
};

export default userReducer;
