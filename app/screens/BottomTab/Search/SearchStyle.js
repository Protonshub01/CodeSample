import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../../utils/Scale';
import COLOR_CONST, { FONTS } from '../../../theme/ColorConstants';
import COLORS from '../../../Theme'
import Theme from '../../../Theme';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: COLOR_CONST.white,
    },

    SearchBarContainer: {
        backgroundColor: COLOR_CONST.white,
        marginVertical: scale(40),
        marginBottom: scale(15),
    },

    recentText: {
        marginTop: scale(13),
        // marginLeft: scale(18),
        marginHorizontal: scale(22.5),
        fontSize: scale(16),
        lineHeight: scale(18),
        color: Theme.colors.primaryThemeColor,
        // fontFamily: FONTS.GTWalsheimProRegular,
        marginBottom: scale(6),
    },

    listContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLOR_CONST.white,
        paddingVertical: verticalScale(12),
    },

    categoryContainer: {
        alignItems: 'center',
        marginHorizontal: scale(22.5),
    },

    categoryView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(80),
        height: scale(80),
        borderRadius: scale(80/2),
        overflow: 'hidden'
    },

    categoryImage: {
        width: scale(80),
        height: scale(80),
    },

    categoryText: {
        fontSize: scale(12),
        marginTop: verticalScale(4.8),
        marginBottom: verticalScale(6.7),
        lineHeight: scale(15),
        width: scale(60),
        textAlign: 'center',
        // fontFamily: FONTS.GTWalsheimProMedium,
        color: COLOR_CONST.charcoalGrey,
    },

});