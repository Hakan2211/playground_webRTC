import { alertActions } from "../actions/alertAction";

const initState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
      };
    default:
      return state;
  }
};

export default reducer;
