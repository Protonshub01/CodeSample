import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Platform,
} from 'react-native';
import COLOR_CONST, { FONTS } from '../../theme/ColorConstants';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './AppLoaderStyle';
import { connect } from "react-redux";
import COLORS from '../../Theme';

const AppLoader = (props) => {

    const [isLoading, setIsLoading] = useState(true);

    // const handleLoader = () => {

        if (!props.isFetching) {
            return null;
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' ? <ActivityIndicator size="large" color={COLORS.colors.primaryThemeColor} /> :
                        <Spinner
                            cancelable
                            color={COLOR_CONST.primaryThemeColor}
                            visible={isLoading}
                            textStyle={{ color: COLOR_CONST.white }}
                        />
                    }
                </View>
            )
        }
    };

    // return (
    //     <View>
    //         {handleLoader()}
    //     </View>
    // );
// };

const mapStateToProps = state => {
    // console.log('state object from app loader', state);
    return {
        isFetching: state.commonReducer.isFetching,
    };
}

export default connect(mapStateToProps)(AppLoader);