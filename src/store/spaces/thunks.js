import axios from "axios";
import { setSpaces, setSpaceWithStories, setMe } from "./slice";
import { selectToken } from "../user/selectors";
const URL = "HTTP://localhost:4000";
// Setup the thunk to send a get request to the / endpoint
// dispatch the response to the spaces slice
// dispatch this thunk from the useEffect in the spacePage
// Setup a selector to select the spaces from the init

export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${URL}`);
    // console.log(response.data);
    dispatch(setSpaces(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchSpaceWithStories = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${URL}/spaces/${id}`);
    dispatch(setSpaceWithStories(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchMySpace = () => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    const response = await axios.get(`${URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setMe(response.data));
    // console.log("response", response);
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteStory = (id) => async (dispatch, getState) => {
  try {
    const token = selectToken(getState());
    const response = await axios.delete(`${URL}/story/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(fetchMySpace());
  } catch (e) {
    console.log(e.message);
  }
};
