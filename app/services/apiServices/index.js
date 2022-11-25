import * as url from '../config/index';
import * as type from '../../utils/Constans'

export default class Api {

    static loginAPI(action) {

        const login_url = url.LOGIN_URL;
        const users = {
            "user": {
                "login": action.login,
                "password": action.password
            }
        }
        console.log('action body ============================>>>>>>>>>>>>>>>>', users)
        return fetch(login_url, {
            method: type.POST_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                //console.log('JSON error======================', e)
                throw e;
            });
    }
    static signUpAPI(action) {
        const signUp_url = url.SIGN_UP_URL;
        console.log('Sign Up Action =============== >>>>>>>>>>>>>>>> ', action)
        const userData = {
            "user": {
                "type": 'EmailSmsUser',
                "full_name": action.full_name,
                "email": action.email,
                "full_phone_number": action.full_phone_number,
                "password": action.password
            }
        }
        console.log('url', signUp_url);
        console.log('user data of sign up ============================ ', userData)
        return fetch(signUp_url, {
            method: type.POST_API,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then((json) => {
                console.log('json-------------------->', json);
                return json;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
    static forgotPasswordAPI(action) {
        const forgotPassword_url = url.FORGOT_PASSWORD;
        const body = {
            "forgot": action.forgot,
            "otp_type": "forgot_password",
        }
        console.log('action body ============================>>>>>>>>>>>>>>>>', body)
        console.log('url ================================ >>>>>>>>>>>>>>>>>>>>>>>', forgotPassword_url)
        return fetch(forgotPassword_url, {
            method: type.POST_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
    static verfiOTPAPI(action) {
        const verifyOtp_url = url.VERIFY_OTP + `?forgot=${action.email}&otp=${action.otp}`;

        console.log('url ================================ >>>>>>>>>>>>>>>>>>>>>>>', verifyOtp_url)
        return fetch(verifyOtp_url, {
            method: type.GET_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
    static resetPassworddAPI(action) {
        const resetPassword_url = url.RESET_PASSWORD;
        const body = {
            "forgot": action.forgot,
            "otp_token": action.otp_token,
            "password": action.password
        }
        //console.log('change password action >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>', action);
        console.log('action body ============================>>>>>>>>>>>>>>>>', body)
        console.log('url ================================ >>>>>>>>>>>>>>>>>>>>>>>', resetPassword_url)
        return fetch(resetPassword_url, {
            method: type.POST_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
    static helpCenterAPI(action) {

        const help_center_url = url.HELP_CENTER;
        // const users = {
        //     "user": {
        //         "login": action.login,
        //         "password": action.password
        //     }
        // }
        // console.log('action body ============================>>>>>>>>>>>>>>>>', users)
        return fetch(help_center_url, {
            method: type.GET_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                //console.log('JSON error======================', e)
                throw e;
            });
    }
    static changePasswordAPI(action) {

        const change_password_url = url.CHANGE_PASSWORD + action.id + '/change_password';
        console.log('change password url ', change_password_url);
        const users = {
            "user": {
                "current_password": action.currentPassword,
                "new_password": action.newPassword
            }
        }
        console.log('action body ============================>>>>>>>>>>>>>>>>', action)
        return fetch(change_password_url, {
            method: type.PATCH_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
    static editProfileAPI(action) {
        const edit_profile_url = url.EDIT_PROFILE + action.id;

        return fetch(edit_profile_url, {
            method: type.GET_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                //console.log('JSON error======================', e)
                throw e;
            });
    }
    static getOTP_API(action) {

        const get_otp_url = url.GET_OTP + action.id + '/generate_otp';
        if (action.email) {
             users = {
                "user": {
                    "email": action.email,
                    "update_type": action.update_type
                }
            }
        }
        else{
            users = {
                "user": {
                    "full_phone_number": action.full_phone_number,
                    "update_type": action.update_type
                }
            }
        }
        console.log('action body ============================>>>>>>>>>>>>>>>>', users)
        return fetch(get_otp_url, {
            method: type.POST_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
    static verfiy_profile_API(action) {

        const verify_otp_url = url.VERIFY_PROFILE_OTP + action.id + '/verify_otp';

        if (action.email) {
             users = {
                "user": {
                    "email": action.email,
                    "otp": action.otp
                }
            }
        }
        else {
            users = {
                "user": {
                    "full_phone_number": action.full_phone_number,
                    "otp": action.otp
                }
            }
        }

        console.log('action body ============================>>>>>>>>>>>>>>>>', action)
        return fetch(verify_otp_url, {
            method: type.POST_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
    static updateAccountAPI(action) {
        console.log('action =============' , action);

        const update_account_url = url.UPDATE_ACCOUNT + action.id;
        console.log('update account url', update_account_url);
        let formdata = new FormData();
        // formdata.append(
        //     'avatar',
        //     action.avatar,
        //   );
        // formdata.append('avatar',action.avatar);
        // formdata.append('files',
        // { uri: action.avatar, name: 'profile_image.jpg', type: 'image/jpeg' }
    // );
        formdata.append('full_name',action.full_name);
        console.log('action body form data ============================>>>>>>>>>>>>>>>>',formdata)
        return fetch(update_account_url, {
            method: type.PATCH_API,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata
        })
            .then(res => res.json())
            .then((data) => {
                console.log('JSON data====================== >>>>>>>>>>>>>>>>>>>>>>>> ', data)
                return data;
            })
            .catch((e) => {
                console.log('JSON error======================', e)
                throw e;
            });
    }
}
