import { all, fork, takeEvery } from 'redux-saga/effects';
import * as type from '../../utils/Constans'
import { loginUser, signUpUser } from './userSaga';


const watchUser = function* watchUser() {
     yield takeEvery(type.LOGIN_USER_REQUESTED, loginUser);
     yield takeEvery(type.SIGNUP_USER_REQUESTED, signUpUser);
}

const rootSaga = function* mySagas() {
     yield watchUser();
};

export default rootSaga;