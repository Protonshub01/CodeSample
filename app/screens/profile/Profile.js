import React, { useState, useEffect } from 'react'
import {
  View, Text, TouchableOpacity, Modal, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback, Share, BackHandler
} from 'react-native';
import styles from './ProfileStyle';
import * as IMG_CONST from '../../theme/ImageConstants';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import Theme from '../../Theme';
import themeJson from '../../theme/them.json';
import scale, { verticalScale } from '../../utils/Scale';
import * as profileActions from '../../redux/actrions/profileActions'
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile = (props) => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showPickerModal, setShowPickerModal] = useState(false);
  const [helpCenterDetails, setHelpCenterDetails] = useState('');

  useEffect(() => {
    props.navigation.addListener(
      'focus',
      payload => {
        ProfileData();
        HelpCenterData();
      }
    );
    ProfileData();
    HelpCenterData();
    setNavigationHeaderConfiguration(navigation = props.navigation);
    // BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick());
  }, []);

  const setNavigationHeaderConfiguration = () => {
    // const { cartHasProductFlag, cartCount } = this.props;
    navigation.setOptions({
      headerStyle: { backgroundColor: COLOR_CONST.white, shadowColor: 'transparent', elevation: 0 },
      headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Profile</Text></View>),
      headerRight: () => (Platform.OS === 'ios' &&
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('NotificationScreen')
            }>
            <Image
              source={IMG_CONST.NOTFIY_ON}
              style={styles.notifIcon}
            />
            {/* {showNotificationDot && ( */}
            {/* <View
                style={{
                  height: scale(6),
                  width: scale(6),
                  borderRadius: scale(3),
                  backgroundColor: themeJson.config.primaryColor,
                  borderColor: 'white',
                  borderWidth: 0.9,
                  position: 'absolute',
                  top: scale(0),
                  end: scale(2),
                }}
              /> */}
            {/* )} */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
          >
            <Image source={IMG_CONST.CART_BLACK_ICON} style={styles.cartIcon} />
            {/* {cartHasProductFlag && ( */}
            <View
              style={{
                height: scale(20),
                width: scale(20),
                borderRadius: scale(30),
                // backgroundColor: themeJson.config.primaryColor,
                borderColor: 'white',
                borderWidth: 0.9,
                position: 'absolute',
                top: scale(-10),
                end: scale(15),
                justifyContent: 'center',
                alignItems: 'center'
              }}
            ><Text style={{ fontSize: scale(10), color: COLOR_CONST.white, }}>cartCount</Text></View>
            {/* )} */}
          </TouchableOpacity>
        </View>
      ),
    });
  };

  const onShare = async () => {
    let shareAppUrl = '';
    if (Platform.OS === 'ios') {
      // shareAppUrl = themeJson.config.appstoreURL
    } else {
      // shareAppUrl = themeJson.config.playstoreURL
    }
    try {
      const result = await Share.share({
        message: shareAppUrl,
        // url: this.state.productData.product.deep_link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onPressCameraUploadImage = (props) => {
    console.log('ON presss load IMAGE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ', props);
    setShowPickerModal(true);
  };

  const onPressCamera = (props) => {
    //alert('Not able to open camera');
    try {
      ImagePicker.openCamera({
        mediaType: 'photo',
        compressImageQuality: 0.3,
        includeBase64: true,
        cropping: true,
      }).then(async (image) => {
        console.log('@@@ Selected Image Item =============', image);
        //const source = {uri: image.path};
        // this.setState(
        //   {
        //     showProfileImage: true,
        //     profileImage: source,
        //     profileImageData: image,
        //     showPickerModal: false,
        //   },
        //   () => this.updateProfileData(),
        // );
      });
    } catch (e) {
      console.log('@@@ Error opening camera ==========', e);
    }
  };

  const onPressPickImage = () => {
    // alert('image picker')
    try {
      ImagePicker.openPicker({
        mediaType: 'photo',
        compressImageQuality: 0.3,
        includeBase64: true,
        cropping: true,
      }).then(async (image) => {
        console.log('@@@ Selected Image Item =============', image);
        // const source = {uri: image.path};
        // this.setState(
        //   {
        //     showProfileImage: true,
        //     profileImage: source,
        //     profileImageData: image,
        //     showPickerModal: false,
        //   },
        //   () => this.updateProfileData(),
        // );
      });
    } catch (e) {
      console.log('@@@ Error opening image picker ==========', e)
    }
  };

  const renderImagePickerModal = (props) => {
    console.log('render Image Picker Modal@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', props)
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props}
        onRequestClose={() => {
          setShowPickerModal(false)
        }}
      >
        <TouchableWithoutFeedback onPress={() => { setShowPickerModal(false) }}>
          <View style={styles.modalContainer}>
            <View style={styles.transparentBg} />
            <View style={styles.bottomView}>
              {/* <TouchableOpacity onPress={() => updateShowPickerModal.setShowPickerModal(false)}>
                <Image
                  source={IMG_CONST.CROSS_ICONS}
                  style={styles.crossIcon}
                />
              </TouchableOpacity> */}
              <View style={styles.headingTextView}>
                <Text style={styles.headingText}>Profile photo</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() =>
                  onPressCamera()
                } style={styles.leftButton}>
                  {/* <Image
                    source={IMG_CONST.CAMERA_ICONS}
                    style={styles.cameraIcon}
                  /> */}
                  <Entypo name='camera' size={22} style={styles.cameraIcon} />
                  {/* <Text style={styles.takePictureText}>{`TAKE PICTURE\nFROM CAMERA`}</Text> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                  onPressPickImage()
                } style={styles.rightButton}>
                  <FontAwesome name="photo" size={22} style={styles.cameraIcon} />
                  {/* <Image
                    source={IMG_CONST.GALLERY_ICON}
                    style={styles.cameraIcon}
                  /> */}
                  {/* <Text style={styles.takePictureText}>{`ADD FROM\nGALLERY`}</Text> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  const renderHeaderView = (props) => {
    // let userData = props.editProfile;
    let disabled = name && email && image ? true : false;
    console.log('edit button disable ', disabled)
    console.log('header user dataaaaaaa', name, email, image);
    // if(!userData)
    // return;
    // const sourceProfile = `data:image/jpeg;base64,${userData.base_64_profile_picture}`;
    return (
      <View style={{ backgroundColor: COLOR_CONST.white, }}>
        <View style={styles.leftRow}>
          <TouchableOpacity activeOpacity={1} onPress={() => { }
            //userData &&
            // onPressCameraUploadImage(props)
          } style={styles.carmeraButton}>
            <Image source={
              // userData ? userData.profile_picture ? {uri: userData.profile_picture } : IMG_CONST.CAMERA_ICON :
              image ?
                // {uri: image } 
                { uri: 'https://icon2.cleanpng.com/20180319/row/kisspng-computer-icons-google-account-user-profile-iconfin-png-icons-download-profile-5ab0301d8907a6.3404305715214960935613.jpg' }
                : IMG_CONST.CAMERA_ICON
              // :IMG_CONST.CAMERA_ICON
            }
              style={
                image ?
                  styles.profileIcon : styles.cameraIcon1}
            />
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            <View style={styles.propfileData}>
              <View>
                <Text numberOfLines={1} style={styles.profileName}>
                  {/* Heena */}
                  {name ? name : 'Guest User'}
                  {/* {userData ? userData.name : 'Guest User'} */}
                </Text>
              </View>
              <View>
                {/* {userData &&  */}
                <TouchableOpacity onPress={() =>
                  navigation.navigate('EditProfile')}
                  disabled={disabled}
                  style={styles.editButton}>
                  <Image source={IMG_CONST.EDIT_ICON} style={styles.editIcon} />
                  {/* <Text style={styles.editText}>Edit</Text> */}
                </TouchableOpacity>
              </View>

            </View>
          </View>
          <Text style={styles.profileEmail}>
            {/* {userData ? userData.email : ''} */}
            {/* heena@static.email */}
            {email ? email : ''}
          </Text>
        </View>
      </View>
    )
  };

  const renderListBottomView = (props) => {
    // let userData = this.props.profileData;
    useEffect(() => {
      // console.log('Profile List Items props @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', updateState)
    }, []);
    console.log('render bottom list props &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&^^^^^^^^^^^^^^^ ', props)
    return (
      <View style={styles.bottomListContainer}>
        <TouchableOpacity onPress={() =>
          navigation.navigate('ContactUs')
          // , { helpCenterData: this.state.helpCenterData, userData: this.props.profileData})
        }
          style={styles.rowItemContainerListView}>
          <Image source={IMG_CONST.CONTACT_ICON} style={styles.leftIconListView} />
          <Text style={styles.wishListView}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />

        <TouchableOpacity onPress={() =>
          navigation.navigate('HelpCenter', { helpCenterDetails: props })
          //  , { helpCenterData: this.state.helpCenterData})
        } style={styles.rowItemContainerListView}>
          <Image source={IMG_CONST.HELP_ICON} style={styles.leftIconListView} />
          <Text style={styles.wishListView}>Help Center</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />

        <TouchableOpacity onPress={() =>
          navigation.navigate('ProfileFAQ')
          // , { helpCenterData: this.state.helpCenterData})
        } style={styles.rowItemContainerListView}>
          <Image source={IMG_CONST.FAQ_ICON} style={styles.leftIconListView} />
          <Text style={styles.wishListView}>FAQs</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />

        <TouchableOpacity style={styles.rowItemContainerListView}>
          <Image source={IMG_CONST.NOTIFICATIONS_PROFILE_ICON} style={styles.notificationIcon} />
          <Text style={styles.wishListView}>Notifications</Text>
          <TouchableOpacity onPress={() => { }}
          //  userData ? this.toggleSwitch() : this.setState({ showGuestModal: true })}
          >
            <Image source={
              // this.state.isNotificationOn ? IMG_CONST.NOTIF_ON_ICON :
              IMG_CONST.NOTIF_OFF_ICON} style={styles.notifIcon} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />

        <TouchableOpacity onPress={() =>
          setShowLogoutModal(true) //&& props.navigation.replace('AuthNavigator')
        }
          style={styles.rowItemContainerListView}>
          <Image source={IMG_CONST.LOGOUT_ICON} style={styles.logoutIcon} />
          <Text style={styles.wishListView}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  };

  const onPressLogout = async (props) => {
    setTimeout(async () => {
      // this.props.stopSpinner();
      await AsyncStorage.removeItem('id');
      // await AsyncStorage.removeItem('USER_ID');
      // await AsyncStorage.removeItem('LOCATION_ACCESS');
      // await AsyncStorage.removeItem('NOTIFICATION_ACCESS');
      navigation.replace('AuthNavigator');
      // this.props.getProfileDataFailure();
    }, 2000);
    //this._signOut();
    // let fcmToken = await AsyncStorage.getItem('USER_FCM_TOKEN');
    // let userToken = await AsyncStorage.getItem('USER_TOKEN');
    // let data = {
    //   device_token: fcmToken,
    //   token: userToken
    // }
    // this.props.startSpinner();
    setShowLogoutModal(false);
    // this.props.onLogoutUser(data, (res) => this.onLogoutUserSuccessCallBack(res), (err) => this.onLogoutUserFailureCallBack(err))
  };

  const renderLogoutModal = (props) => {
    // const [showLogoutModal, setShowLogoutModal] = useState(false);
    console.log('Render Logout Modal ##########################################################', props)
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props}
        onRequestClose={() => {
          setShowLogoutModal(false)
        }}
      >
        <TouchableOpacity activeOpacity={1} onPress={() => { }} style={styles.modalContainer}>
          <View style={styles.popup}>
            <Text style={styles.deleteAddress}>Logout</Text>
            <Text style={styles.areYouSure}>Are you sure you want to logout from Restaurant?</Text>
            <View style={styles.bottomPopupView}>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() =>
                setShowLogoutModal(false)
              }>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <View style={styles.verticalLine} />
              <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() =>
                onPressLogout()
              }>
                <Text style={styles.yesDelete}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  const renderListItems = (props) => {
    // let userData = this.props.profileData;
    // if(!userData)
    // return;
    return (
      <View style={styles.listContainer}>
        <Animatable.View
          animation="zoomIn"
          duration={2000}
        >
          <View style={styles.rowItemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={{}}>
              <View style={styles.iconView}>
                <Image source={IMG_CONST.WISHLIST_ICON} style={styles.leftIcon} />
              </View>
              <View style={styles.iconTextView}>
                <Text style={[styles.wishList]}>Favorite food</Text>
              </View>
              {/* {userData && userData.wishlists_count !== 0 &&
            <View style={styles.countContainer}>
              <Text style={styles.countText}>{userData ? userData.wishlists_count : 0}</Text>
            </View>} */}
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>
              // userData ? 
              navigation.navigate('MyOrders')
              //</View> : this.setState({ showGuestModal: true })
            } style={{}}>
              <View style={styles.iconView}>
                <Image source={IMG_CONST.MYORDERS_ICON} style={styles.leftIcon} />
              </View>
              <View style={styles.iconTextView}>
                <Text style={[styles.wishList, { marginBottom: scale(14) }]}>My Orders</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>
              // userData ? 
              navigation.navigate('SavedAddresses')
              // : this.setState({ showGuestModal: true })
            } style={{}}>
              <View style={styles.iconView}>
                <Image source={IMG_CONST.SAVED_ICON} style={styles.leftIcon} />
              </View>
              <View style={styles.iconTextView}>
                <Text style={styles.wishList}>Saved Addresses</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowItemContainer}>
            <TouchableOpacity onPress={() =>
              onShare()
            } style={{}}>
              <View style={styles.iconView}>
                <Image source={IMG_CONST.INVITE_ICON} style={styles.leftIcon} />
              </View>
              <View style={styles.iconTextView}>
                <Text style={styles.wishList}>Share with Friend</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>
              // userData ? 
              navigation.navigate('ConnectedAccounts')
              // : this.setState({ showGuestModal: true })
            } style={{}}>
              <View style={styles.iconView}>
                <Image source={IMG_CONST.CONNECTED_ICON} style={styles.leftIcon} />
              </View>
              <View style={styles.iconTextView}>
                <Text style={styles.wishList}>Connected Accounts</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                // userData ? 
                navigation.navigate('ChangePassword')
                // : this.setState({ showGuestModal: true })
              }
              style={{}}>
              <View style={styles.iconView}>
                <Image source={IMG_CONST.PASSWORD_ICON} style={styles.leftIcon} />
              </View>
              <View style={styles.iconTextView}>
                <Text style={styles.wishList}>Change Password</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    )
  };

  const ProfileData = async () => {
    let userID = await AsyncStorage.getItem('id');
    console.log('async storage data', userID)
    let data = {
      id: userID
    }
    console.log('Profile @@@@@@@@@@@@@@@@@@');
    props.editProfile(data, (res) => getEditProfileSuccessCallBack(res), (error) => getEditProfileFailureCallBack(error));
  };

  const getEditProfileSuccessCallBack = (res) => {
    console.log('@@@ Get Edit Profile Data Success CallBack ===================', res);
    console.log('profile name..', res.data.full_name);
    console.log('profile email..', res.data.email);
    console.log('profile image..', res.avatar);
    try {
      if (res) {
        console.log('its a true data', res.data.full_name);
        setName(res.data.full_name);
        setEmail(res.data.email);
        setImage(res.avatar);
        console.log('user name', name);
        console.log('user email', email);
      } else {
        console.log('something went wrong');
      }
    } catch (err) {
      console.log('Error', err.message);
    }
  };

  const getEditProfileFailureCallBack = (error) => {
    console.log('@@@ Get Edit Profile Data Failure CallBack ===================', error)
  };

  const handleBackButtonClick = () => {
    props.navigation.goBack();
    return true;
  };

  const HelpCenterData = async () => {
    let data = {
      // uuid: DeviceInfo.getUniqueId(),
    }
    props.helpCenterDetails(data, (res) => getHelpCenterDetailsSuccessCallBack(res), (error) => getHelpCenterDetailsFailureCallBack(error));
  };

  const getHelpCenterDetailsSuccessCallBack = (res) => {
    console.log('@@@ Get Help Center Data Success CallBack ===================', res);
    try {
      if (res.success == true) {
        console.log('its a trueeeeeeeeeeeeeeeeeee', res.data.description)
        setHelpCenterDetails(res.data)
        // if (res.data[0].help_type == "Privacy Policy") {
        //     console.log('Its a Privacy .......................', res.data[0]);
        //     setPrivacyPolicy(res.data[0]);
        // }
        // if (res.data[1].help_type == "Term And Condition") {
        //     console.log(res.data[1]);
        //     setTermsAndConditions(res.data[1]);
        // }
      }
      else {
        console.log(res.message)
      }
    } catch (err) {
      //   Sentry.captureException(err);
      console.log('Error', err.message)
    }
  };

  const getHelpCenterDetailsFailureCallBack = (error) => {
    console.log('@@@ Get Help Center Data Failure CallBack ===================', error);
    // if (error) {
    //   setTimeout(() => {
    //     this.setState({ noProductFound: true });
    //     this.props.showErrorModal(error);
    //   }, 0);
    // } else {
    //   setTimeout(() => {
    //     this.props.showErrorModal('Network Error!');
    //   }, 0);
    // }
  };
  console.log('Help center data from profile Screen &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ', helpCenterDetails);

  return (
    <SafeAreaView style={styles.container}>
      {/* <FocusAwareStatusBar statusBarTranslucent barStyle="dark-content" backgroundColor="#FFF" isFocused={true} /> */}
      <ScrollView>
        {renderHeaderView(showPickerModal)}
        {renderListItems(navigation = props.navigation)}
        {renderListBottomView(data = helpCenterDetails)}
        {renderLogoutModal(showLogoutModal)}
        {/* {this.renderGuestModal()}*/}
        {/* {renderImagePickerModal(showPickerModal, updateShowPickerModal = { setShowPickerModal })} */}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (data, successCallBack, failureCallBack) => dispatch(profileActions.getEditProfile(data, successCallBack, failureCallBack)),
    helpCenterDetails: (data, successCallBack, failureCallBack) => dispatch(profileActions.getHelpCenterDetails(data, successCallBack, failureCallBack))
  }
};

export default connect(null, mapDispatchToProps)(Profile);