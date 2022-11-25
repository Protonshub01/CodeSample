import * as USER_CONST from '../../utils/Constans'

export const getHelpCenterDetails = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_HELP_CENTER_DETAILS_REQUESTED,
        payload: {
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const changePassword =(data, successCallBack, failureCallBack) => {
    return{
        type : USER_CONST.CHANGE_PASSWORD_REQUESTED,
        payload:{
            successCallBack,
            failureCallBack,
            data
        }
    }
}

export const getEditProfile = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_EDIT_PROFILE_REQUESTED,
        payload: {
            successCallBack,
            failureCallBack,
            data,
        }
    };
};

export const getOTP = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.GET_OTP_REQUESTED,
        payload: {
            successCallBack,
            failureCallBack,
            data,
        }
    };
};

export const verifyOtp = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.VERIFY_OTP_REQUESTED,
        payload: {
            successCallBack,
            failureCallBack,
            data,
        }
    };
};

export const updateAccount = (data, successCallBack, failureCallBack) => {
    return {
        type: USER_CONST.UPDATE_ACCOUNT_REQUESTED,
        payload: {
            successCallBack,
            failureCallBack,
            data,
        }
    };
};

export const getUpdateAccountSuccess = (data) => {
    return {
        type: USER_CONST.UPDATE_ACCOUNT_SUCCESS,
        payload: {
            data,
        }
    }
}