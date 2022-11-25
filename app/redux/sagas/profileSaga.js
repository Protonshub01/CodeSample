
import { put, takeEvery, call } from 'redux-saga/effects';
import services from '../../services/apiServices/index';
import * as type from '../../utils/Constans';
import * as commonActions from '../actrions/commonActions';
import * as profileActions from '../actrions/profileActions';

export function* helpCenterDetails(action) {

    try {
        // yield put(commonActions.startSpinner());
        const helpCenterDetails = yield call(services.helpCenterAPI);
        console.log('help Center Result ============================>>>>>>>>>>>>>>>>', helpCenterDetails)
        yield put({ type: type.GET_HELP_CENTER_DETAILS_SUCCESS, helpCenterDetails });

        if (helpCenterDetails !== undefined && helpCenterDetails !== null) {
            // yield put(commonActions.stopSpinner());
            console.log('Heena @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Heena ', helpCenterDetails.data[0])
            action.payload.successCallBack(helpCenterDetails)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.GET_HELP_CENTER_DETAILS_FAILED, message: e.message });
    }
}

export function* changePassword(action) {

    try {
        yield put(commonActions.startSpinner());
        const changePassword = yield call(services.changePasswordAPI, action.payload.data);
        console.log('change Password ============================>>>>>>>>>>>>>>>>', changePassword)
        yield put({ type: type.CHANGE_PASSWORD_REQUESTED, changePassword });

        if (changePassword !== undefined && changePassword !== null) {
            yield put(commonActions.stopSpinner());
            console.log('ChangePassword @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ', changePassword)
            action.payload.successCallBack(changePassword)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.CHANGE_PASSWORD_FAILED, message: e.message });
    }
}

export function* editProfile(action) {

    try {
        yield put(commonActions.startSpinner());
        const editProfile = yield call(services.editProfileAPI, action.payload.data);
        console.log('edit profile ============================>>>>>>>>>>>>>>>>', editProfile)
        yield put({ type: type.GET_EDIT_PROFILE_SUCCESS, editProfile });

        if (editProfile !== undefined && editProfile !== null) {
            yield put(commonActions.stopSpinner());
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ edit', editProfile)
            action.payload.successCallBack(editProfile)
        } else {
            action.payload.failureCallBack(null);
        }
    } catch(e) {
        yield put({ type: type.GET_EDIT_PROFILE_FAILED, message: e.message });
    }
}

export function* getOTP(action) {

    try {
        yield put(commonActions.startSpinner());
        const otpDetails = yield call(services.getOTP_API, action.payload.data);
        console.log('OTP DETAILS ============================>>>>>>>>>>>>>>>>', otpDetails)
        yield put({ type: type.GET_OTP_REQUESTED, otpDetails });

        if (otpDetails !== undefined && otpDetails !== null) {
            yield put(commonActions.stopSpinner());
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ OTP', otpDetails)
            action.payload.successCallBack(otpDetails)
        } else {
            action.payload.failureCallBack(null);
        }
    } catch(e) {
        yield put({ type: type.GET_OTP_FAILED, message: e.message });
    }
}

export function* verifyProfileOTP(action) {

    try {
        yield put(commonActions.startSpinner());
        const verifyotpDetails = yield call(services.verfiy_profile_API, action.payload.data);
        console.log('VERIFY OTP DETAILS ============================>>>>>>>>>>>>>>>>', verifyotpDetails)
        yield put({ type: type.VERIFY_OTP_REQUESTED, verifyotpDetails });

        if (verifyotpDetails !== undefined && verifyotpDetails !== null) {
            yield put(commonActions.stopSpinner());
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ VERIFY OTP', verifyotpDetails)
            action.payload.successCallBack(verifyotpDetails)
        } else {
            action.payload.failureCallBack(null);
        }
    } catch(e) {
        yield put({ type: type.VERIFY_OTP_FAILED, message: e.message });
    }
}

export function* updateAccount(action) {

    try {
        // yield put(commonActions.startSpinner());
        const updateAccountDetails = yield call(services.updateAccountAPI, action.payload.data);
        console.log(' update DETAILS ============================>>>>>>>>>>>>>>>>', updateAccountDetails)
        yield put({ type: type.UPDATE_ACCOUNT_SUCCESS, updateAccountDetails });

        if (updateAccountDetails !== undefined && updateAccountDetails !== null) {
            // yield put(commonActions.stopSpinner());
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ update', updateAccountDetails)
            action.payload.successCallBack(updateAccountDetails)
            // yield put(profileActions.getProfileDataSuccess(updateAccountDetails));

        } else {
            action.payload.failureCallBack(null);
        }
    } catch(e) {
        yield put({ type: type.UPDATE_ACCOUNT_FAILED, message: e.message });
    }
}