import axios from "axios";
import { setSpaces } from "./slice";
const URL = "HTTP://localhost:4000";
// Setup the thunk to send a get request to the / endpoint
// dispatch the response to the spaces slice
// dispatch this thunk from the useEffect in the spacePage
// Setup a selector to select the spaces from the init

export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    const spacesResponse = await axios.get(`${URL}`);
    // console.log(spacesResponse.data);
    dispatch(setSpaces(spacesResponse.data));
  } catch (e) {
    console.log(e.message);
  }
};
