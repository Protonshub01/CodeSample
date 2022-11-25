import * as type from '../../utils/Constans'

const initialState = {
    error: null,
    helpCenterDetails: [],
    helpCenterMessage: null,
    helpCenterResultStatus: Boolean,
    changePasswordResult: [],
    editProfile: [],
    OTP_details: [],
    verifyOtp:[],
    acoountUpdate:[],
    loading: false,
};

const profileReducer = (state = initialState, action) => {
    // console.log('Profile reducer, @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ', action);
    switch (action.type) {
        case type.GET_HELP_CENTER_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_HELP_CENTER_DETAILS_SUCCESS:
            return {
                ...state,
                helpCenterDetails: action.helpCenterDetails,
                // helpCenterMessage:action.helpCenterDetails.message,
                // helpCenterResultStatus:action.helpCenterDetails.success,
                loading: false,
            };
        case type.GET_HELP_CENTER_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        case type.CHANGE_PASSWORD_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                changePasswordResult: action.changePasswordResult,
                loading: false,
            };
        case type.CHANGE_PASSWORD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };

        case type.GET_EDIT_PROFILE_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                editProfile: action.editProfile,
                loading: false,
            };
        case type.GET_EDIT_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        case type.GET_OTP_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_OTP_SUCCESS:
            return {
                ...state,
                OTP_details: action.OTP_details,
                loading: false,
            };
        case type.GET_OTP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
            case type.VERIFY_OTP_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.VERIFY_OTP_SUCCESS:
            return {
                ...state,
                verifyOtp: action.verifyOtp,
                loading: false,
            };
        case type.VERIFY_OTP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };

            case type.UPDATE_ACCOUNT_REQUESTED:
                return {
                    ...state,
                    loading: true,
                };
            case type.UPDATE_ACCOUNT_SUCCESS:
                return {
                    ...state,
                    acoountUpdate: action.acoountUpdate,
                    loading: false,
                };
            case type.UPDATE_ACCOUNT_FAILED:
                return {
                    ...state,
                    loading: false,
                    error: action.message,
                };
        default: {
            return state;
        }
    }
}

export default profileReducer;