import {TURBINE_GENERATE_BEGIN, TURBINE_GENERATE_DETAILS,TURBINE_GENERATE_ERROR,TURBINE_GENERATE_ALARMS} from './turbineActions'
const initialState = {
    loading: false,
    error: null,
    details: null,
    alarms: []
}

const turbineReducer = function (state = initialState, action) {
    switch (action.type) {
      case TURBINE_GENERATE_BEGIN:
        state.loading = true;
        break;
      case TURBINE_GENERATE_DETAILS:
        state.loading = false;
        state.details = action.details;
        break;
      case TURBINE_GENERATE_ERROR:
        state.loading = false;
        state.error = action.error;
        break;
      case TURBINE_GENERATE_ALARMS:
        state.alarms = action.alarms;
        break;
    }
    return state;
  };
  
  export default turbineReducer;