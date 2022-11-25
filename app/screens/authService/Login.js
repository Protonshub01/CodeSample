
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import Theme from '../../Theme';
import Button from "../../theme/Button";
import GoogleButton from "../../theme/GoogleButton";
import InputBox from "../../theme/InputBox";
import PasswordInput from "../../theme/PasswordInput";
import * as user from "../../redux/actrions/userActions";
import { connect } from "react-redux";
import { WToast } from "react-native-smart-tip";
import Scale from "../../utils/Scale";
import Wave from '../../theme/Wave';
import BottomWave from "../../theme/BottomWave";
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Login = (props) => {

    const [disabled, setDisabled] = useState(true);
    const [passwordVisibility, setPasswordVisiblity] = useState(true);
    const [emailOrPhone, setEmailorPhone] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [validEmailOrPhone, setValidEmailOrPhone] = useState(false)
    const [emailIcon, setEmailIcon] = useState(false);

    const [password, setPassword] = useState('');

    useEffect(() => {
        return setDisabled(true);
    }, []);
    const handleInputs = (key, value) => {

        if (key == 'emailOrPhone') {
            setEmailorPhone(value);
            handleCheckEmailorPhone(value);
        }
        else if(key == 'password'){
            let pwd = value ? true : false;
            setPassword(value);
            setDisabled(!validEmailOrPhone && pwd ? false : true)
        } 
    }
    const handleCheckEmailorPhone = text => {
        let re = /\S+@\S+\.\S+/; //regex for email address 
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //regex for phone number
        if (re.test(text)) {
            setEmail(text);
            setEmailIcon(true);
            setValidEmailOrPhone(false)
        } 
        else if(regex.test(text)) {
            setPhoneNumber(text);
            setEmailIcon(false); 
            setValidEmailOrPhone(false);
        }
        else{
            setValidEmailOrPhone(true);
        }
    };
    const handlePasswordVisibility = () => {
        if (passwordVisibility)
            setPasswordVisiblity(false);
        else
            setPasswordVisiblity(true)
    }

    const onLogin = async () => {
        // await AsyncStorage.setItem('id', String(1))
        // props.navigation.replace('MainNavigator');

        if (!email && !password) {
            WToast.show({ data: 'Please enter email or password!' })
        }
        else {
            let temp = email ? email : 91 + phoneNumber;
            console.log('Temp', temp);
            let data = {
                login: temp,
                password: password
            }
            console.log('Input data  =============== >>>>>>>>>>>>>>>>>>>>>>>> ', data.login);
            props.login(data, (res) => onLoginSuccessCallBack(res), (err) => onLoginUserFailureCallBack(err),)
        }
    }
    const onLoginSuccessCallBack = async (res) => {
        console.log('Success messGE ====>', res.message)
        console.log('success log', res.success);
        try {
            if (res.success == true) {
                await AsyncStorage.setItem('id', String(res.data.id))
                // let userId = await AsyncStorage.getItem('id');
                // console.log(userId)
                WToast.show({ data: res.message });
                props.navigation.replace('MainNavigator');
            }
            else {
                WToast.show({ data: res.message });

            }

        } catch (err) {
            console.log('Error', err)
        }
    }
    const onLoginUserFailureCallBack = (error) => {
        try {
            console.log('1 @@@ Login Failure CallBack ===================', error);
            WToast.show({ data: error.error });
        } catch (err) {
            console.log('Error', err)
        }
    }
    return (
        <SafeAreaView>
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                <Wave />
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View
                        style={{
                            marginVertical: Scale(10),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: Scale(70),

                        }}
                    >
                        <View
                            style={{
                                shadowColor: Theme.colors.primaryThemeColor,
                                shadowOffset: { width: 12, height: 8 },
                                shadowOpacity: 1,
                                shadowRadius: 15,
                                backgroundColor: Theme.colors.white,
                                borderRadius: Scale(30),
                                borderColor: Theme.colors.primaryThemeColor,
                                borderWidth: Scale(2),
                                width: '90%',
                            }}
                        >

                            <View style={{ marginTop: 5, alignItems: 'center' }}>
                                <Image
                                    style={{ resizeMode: 'contain', width: 250, height: 100 }}
                                    source={Theme.images.logo1}
                                />
                            </View>

                            <View style={{ marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                                <InputBox
                                    inputLabel={Theme.placeholders.EntEmOrMob}
                                    inputCapitalize='none'
                                    activeoutlinecolor={validEmailOrPhone ? Theme.colors.red : Theme.colors.coolGrey}
                                    inputIcon={emailIcon ? "email" : "phone"}
                                    inputValue={emailOrPhone}
                                    inputChange={emailOrPhone => handleInputs('emailOrPhone', emailOrPhone)}
                                />
                            </View>
                            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <PasswordInput
                                    inputLabel={Theme.placeholders.EntPsWd}
                                    inputLeftIcon="lock"
                                    inputRightIcon={passwordVisibility ? "eye-off" : "eye"}
                                    iconPress={() => handlePasswordVisibility()}
                                    passwordSecureText={passwordVisibility}
                                    inputValue={password}
                                    inputChange={(pwd) => handleInputs('password', pwd)}
                                />
                            </View>

                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                <Button buttonText={'Continue'} buttonPress={() => onLogin()} buttonDisabled={disabled} buttonOpacity={disabled  ? 0.4 : 1} />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', marginTop: 10, alignSelf: 'center' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: Theme.colors.lightGrey }} />
                                <View>
                                    <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
                                </View>
                                <View style={{ flex: 1, height: 1, backgroundColor: Theme.colors.lightGrey }} />
                            </View>

                            <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                                <GoogleButton googleText={'Continue with Google'} />
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                                <View><Text style={{}}>Don't have an account?</Text></View>
                                <View>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('SignUpScreen')}>
                                        <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Theme.colors.primaryThemeColor }}> Create </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 40, }}>
                                <TouchableOpacity style={{ position: 'absolute', zIndex: 1 }}
                                    onPress={() =>  //alert('Hi')
                                        props.navigation.navigate('ForgotPasswordScreen')
                                    }>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: Theme.colors.LightlightNavy, marginBottom: 10 }}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
                <BottomWave></BottomWave>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
console.log('screen height = ', height);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: height
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack))
    }
}

export default connect(null, mapDispatchToProps)(Login);