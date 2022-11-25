import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../../utils/Scale';
import COLOR_CONST, { FONTS } from '../../../theme/ColorConstants';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        // alignItems: 'center'
    },

    headerContainer: {
        backgroundColor: COLOR_CONST.LightlightNavy,
        alignContent: 'flex-start',
    },

    logoStyle: { 
        width: 124, 
        height: 31 
    },

    headerTitleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: scale(15),
        // fontFamily: FONTS.GTWalsheimProMedium,
        color: COLOR_CONST.charcoalGrey,
        // lineHeight: scale(14),
        textAlign: 'center',
        // marginTop: verticalScale(5),
    },

    backIcon: {
        width: scale(11.9),
        height: scale(21.7),
        marginLeft: scale(18),
    },

    iconContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        // marginRight: scale(25.6),
        // marginLeft: scale(305.9),
        marginTop: verticalScale(-10),
        marginBottom: scale(10),
    },

    notifIcon: {
        width: scale(25),
        height: scale(26),
        marginTop: verticalScale(16),
    },

    cartIcon: {
        width: scale(22),
        height: scale(19),
        marginLeft: scale(6.5),
        marginTop: verticalScale(19),
    },

    listContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(19.8),
    },

    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: scale(335),
        height: scale(60),
        backgroundColor: COLOR_CONST.white,
        borderRadius: scale(5),
        marginBottom:verticalScale(10)
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    left1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(18),
        marginBottom: verticalScale(10.5),
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(40),
        height: scale(40),
        borderRadius: scale(40/2),
        backgroundColor: COLOR_CONST.white,
        overflow: 'hidden',
        borderWidth: scale(0.3),
        marginLeft: scale(13),
    },

    imageContainer1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(25),
        height: scale(25),
        borderRadius: scale(25/2),
        backgroundColor: COLOR_CONST.white,
        overflow: 'hidden',
        borderWidth: scale(0.3),
        marginLeft: scale(13),
    },

    bottleImage: {
        width: scale(40),
        height: scale(40)
    },

    categoryNameText: {
        // fontFamily: FONTS.GTWalsheimProMedium,
        fontSize: scale(14),
        lineHeight:scale(16),
        color: COLOR_CONST.charcoalGrey,
        marginLeft:verticalScale(9.6),
        alignSelf:'center'
    },

    rightArrow: {
        marginRight: scale(20.3),
        width: scale(8.7),
        height: scale(15.8),
    },

    downArrow: {
        marginTop: verticalScale(26),
        marginRight: scale(16.8),
        width: scale(15.8),
        height: scale(8.7),
    },

    downContent: {
        backgroundColor: COLOR_CONST.white,
        marginBottom: verticalScale(10),
        borderRadius: scale(5)
    },

    downContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: scale(335),
        backgroundColor: COLOR_CONST.white,
        borderRadius: scale(5),
        marginBottom:verticalScale(10)
    },

    line: {
        height: scale(0.5),
        width: scale(335),
        backgroundColor: COLOR_CONST.lightGreyText,
    },

    subCategoryList: {
        flex: 1,
        marginTop: verticalScale(15.5),
        marginLeft: scale(47.6),
        backgroundColor: COLOR_CONST.white
    },

    subCategoryCellContainer: {
        justifyContent: 'center',
        marginBottom: verticalScale(15),
    },

    subCatText: {
        // fontFamily: FONTS.GTWalsheimProRegular,
        fontSize: scale(12),
        color: COLOR_CONST.coolGreyTwo,
    },
});