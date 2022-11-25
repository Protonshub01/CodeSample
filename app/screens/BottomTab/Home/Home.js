import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions, Linking, Text, Alert, BackHandler, TextInput, SafeAreaView, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import * as IMG_CONST from '../../../theme/ImageConstants';
import LinearGradient from 'react-native-linear-gradient';
import ColorConstants, { FONTS } from '../../../theme/ColorConstants';
import styles from './HomeStyle';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Theme from '../../../Theme';
import { HeaderRight } from '../../../components/HeaderRight';
import Swiper from 'react-native-swiper';
import { Category } from '../../../components/homeComponents/Category/Category';
import { ProductGrid } from '../../../components/homeComponents/ProductGrid/ProductGrid';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const Home = (props) => {

    const headerTopView = () => {
        return (
            <View>
                <LinearGradient
                    colors={[
                        ColorConstants.white,
                        ColorConstants.white,
                        ColorConstants.white,
                        ColorConstants.white,
                        ColorConstants.white,
                    ]}
                    style={styles.headerContainer}
                >
                    <View style={styles.locationContainer}>
                        <Image
                            source={Theme.images.logo}
                            style={styles.logoStyle}
                        // source={IMG_CONST[themeJson.config.homeScreenIcon]}
                        // style={styles.homeTextImage}
                        />

                        <HeaderRight
                            showNotification={true}
                            onPress={() =>
                                props.navigation.navigate('NotificationScreen')
                            }
                            {...props}
                        />
                    </View>
                </LinearGradient>
            </View>
        )
    }

    // const renderSwiperView = (index) => {
    //     console.log('@@@ banner =============', this.state.bannerImages, this.state.bannerImages.length);
    //     return (
    //         <Swiper
    //             autoplay
    //             autoplayTimeout={6}
    //             style={styles.wrapper}
    //             key={this.state.bannerImages.length}
    //             showsButtons={false}
    //             paginationStyle={styles.pagination}
    //             activeDot={<View style={styles.activeDot} />}
    //             dot={<View style={styles.inActiveDot} />}
    //         >
    //             {this.state.bannerImages && this.state.bannerImages.length > 0 && this.state.bannerImages[index].images.map((imageItem) => {
    //                 return (
    //                     <TouchableOpacity onPress={() => this.onPressBanner(imageItem)} style={styles.slide1}>
    //                         <Image
    //                             resizeMode={'stretch'}
    //                             source={{ uri: imageItem.image }}
    //                             style={styles.banner} />
    //                     </TouchableOpacity>
    //                 )
    //             })}
    //         </Swiper>
    //     )
    // }

    const renderSwiperView = () => {
        return (
            <Swiper
                autoplay={true}
                autoplayTimeout={2}
                style={styles.wrapper}
                showsButtons={false}
                paginationStyle={styles.pagination}
                activeDot={<View style={styles.activeDot} />}
                dot={<View style={styles.inActiveDot} />}
            >
                <Image
                    resizeMode={'stretch'}
                    source={Theme.images.noodles}
                    style={styles.banner}
                />
                <Image
                    resizeMode={'stretch'}
                    source={Theme.images.background}
                    style={styles.banner}
                />
                <Image
                    resizeMode={'stretch'}
                    source={Theme.images.sweets}
                    style={styles.banner}
                />
            </Swiper>
        )
    }

    const renderHomeView = () => {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.wrapper}>
                        {renderSwiperView()}
                    </View>
                    <Category
                        // categoryList={this.state.categoryList.slice(0, 9)} onPressProductListing={(item) => this.props.navigation.navigate('ProductListing', { categoryData: item, isFromExplore: true, screenName: item.name, isFromCategory: true })} {...this.props}
                        onPressProductListing={() => props.navigation.navigate('ProductListing')}
                        {...props}
                    />
                    <ProductGrid
                        name={'New Dishes'}
                        // data={this.state.latestProductsList}
                        // onPress={(item) => props.navigation.navigate('ProductDescription', { productData: item })}
                        onPressProductListing={() => props.navigation.navigate('ProductListing', { screenName: 'New Dishes' })}
                        // onPressProductListing={() => props.navigation.navigate('ProductListing')}
                        // onAddToCart={(value, item) => onAddToCart(value, item)}
                        // onRemoveFromCart={(value, item) => onRemoveFromCart(value, item)}
                        // updateQuantiyInCart={(value, item) => updateQuantiyInCart(value, item)}
                        // onAddToWishlist={(item) => onAddToWishlist(item)}
                        // onRemoveFromWishlist={(item) => onRemoveFromWishlist(item)}
                        navigation={props.navigation}
                    />
                    {/* {this.state.bannerImages[1] && <View style={styles.wrapper}>
                        {this.renderSwiperView(1)}
                    </View>} */}
                    <View style={styles.wrapper}>
                        {renderSwiperView()}
                    </View>

                    <ProductGrid
                        name={'Recommended for you'}
                        onPressProductListing={() => props.navigation.navigate('ProductListing', { screenName: 'Recommeded Dishes' })}
                        // onPressProductListing={() => props.navigation.navigate('ProductListing')}
                        navigation={props.navigation}
                    />
                    <View style={styles.wrapper}>
                        {renderSwiperView()}
                    </View>
                    {/* {this.state.bannerImages[2] && <View style={styles.wrapper}>
                        {this.renderSwiperView(2)}
                    </View>} */}
                </ScrollView>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.white} isFocused={true} />
            {headerTopView()}
            {renderHomeView()}
        </SafeAreaView>
    );
};

export default Home;