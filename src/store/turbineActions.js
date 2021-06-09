import { apiGenerateAlarms, apiGenerateDetails } from "../api/api";

export const TURBINE_GENERATE_BEGIN = "TURBINE_GENERATE_BEGIN";
export const TURBINE_GENERATE_DETAILS = "TURBINE_GENERATE_DETAILS";
export const TURBINE_GENERATE_ERROR = "TURBINE_GENERATE_ERROR";
export const TURBINE_GENERATE_ALARMS = "TURBINE_GENERATE_ALARMS";

// Load the turbine details
export const generateDetails = () => {
    return (dispatch) => {
        dispatch({ type: TURBINE_GENERATE_BEGIN });
        return apiGenerateDetails()
            .then((response) => {
                return dispatch({
                    type: TURBINE_GENERATE_DETAILS,
                    details: response.data,
                });
            })
            .catch((error) => {
                return dispatch({ type: TURBINE_GENERATE_ERROR, error });
            });
    };
};

//Load the alarms
export const generateAlarms = () => {
    return (dispatch) => {
        return apiGenerateAlarms()
            .then((response) => {
                return dispatch({
                    type: TURBINE_GENERATE_ALARMS,
                    alarms: response.data,
                });
            })
            .catch((error) => {
                return dispatch({ type: TURBINE_GENERATE_ERROR, error });
            });
    };
};