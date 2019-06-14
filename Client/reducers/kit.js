import axios from "axios";

//types
const ADDKIT = "ADD_KIT";
//creators
const updateKitList = kit => ({ type: ADDKIT, kit });

// thunks
export const sendKit = newKit => {
  return async dispatch => {
    try {
      const { data } = await axios.post("/api/kit", newKit);

      dispatch(updateKitList(data));
    } catch (err) {
      console.log("problem adding new Kit at kitReducer", err);
    }
  };
};

//state

function kitReducer(state = { kit: {} }, action) {
  switch (action.type) {
    case ADDKIT:
      return { ...state, kit: action.kit };
  }
  return state;
}

export default kitReducer;
