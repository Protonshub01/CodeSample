import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../../utils/Scale';
import COLOR_CONST, { FONTS } from '../../../theme/ColorConstants';


export default StyleSheet.create({

    safeAreaContainer: {
        flex: 1,
        backgroundColor: COLOR_CONST.white
    },

    headerContainer: {
        backgroundColor: COLOR_CONST.LightlightNavy,
        alignContent: 'flex-start',
    },

    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(20),
        marginLeft: scale(22)
    },

    logoStyle: { 
        width: 124, 
        height: 31 
    },

    // homeTextImage: {
    //     width: scale(themeJson.config.homeScreenIconResolution.width),
    //     height: scale(themeJson.config.homeScreenIconResolution.height),
    // },

    container: {
        flex: 1,
        backgroundColor: COLOR_CONST.paleGrey
    },

    wrapper: {
        height: scale(160),
    },

    banner: {
        width: scale(375),
        height: scale(160),
    },

    slide1: {
        height: scale(107),
    },

    slide2: {
        width: scale(374),
        height: scale(107),
        backgroundColor: 'red'
    },

    slide3: {
        width: scale(374),
        height: scale(107),
        backgroundColor: 'black'
    },

    pagination: {
        position: 'absolute',
        bottom: verticalScale(7),
        left: 0,
        right: 0,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    activeDot: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_CONST.primaryThemeGradient,
        width: scale(5), 
        height: scale(5),
        borderRadius: scale(2), 
        marginHorizontal: scale(2.5),
    },

    inActiveDot: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_CONST.white,
        width: scale(5), 
        height: scale(5),
        borderRadius: scale(2), 
        marginHorizontal: scale(2.5),
    },

});