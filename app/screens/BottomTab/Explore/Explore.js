import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    BackHandler,
} from 'react-native';
import Theme from '../../../Theme';
import styles from './ExploreStyle';
import LinearGradient from 'react-native-linear-gradient';
import * as IMG_CONST from '../../../theme/ImageConstants';
import { HeaderRight } from '../../../components/HeaderRight';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import scale, { verticalScale } from '../../../utils/Scale';
import COLOR_CONST, { FONTS } from '../../../theme/ColorConstants';

const categoryList = [
    {
        name: "Burger",
        categoryImage: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
    },
    {
        name: "Healthy",
        categoryImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MiVL2nmDsdhF8Xnt5lbvDjElKF0m5KJXEg&usqp=CAU"
    },
    {
        name: "Paneer",
        categoryImage: "https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-740x710.jpeg"
    },
    {
        name: "Chicken",
        categoryImage: "https://www.mydelicious-recipes.com/home/images/227_735_820/mydelicious-recipes-chicken-65"
    },
    {
        name: "Chaat",
        categoryImage: "https://www.whiskaffair.com/wp-content/uploads/2018/11/Papdi-Chaat-2-1.jpg"
    },
    {
        name: "Pizza",
        categoryImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*"
    },
    {
        name: "Rolls",
        categoryImage: "https://img4.nbstatic.in/tr:w-500/5ad49ca6590801000cc7ffb5.jpg"
    },
    {
        name: "Dosa",
        categoryImage: "https://www.ticklingpalates.com/wp-content/uploads/2022/03/plain-dosa-with-dosa-batter-made-in-mixie-jar.jpg"
    },
];

const Explore = (props) => {

    useEffect(() => {
        setNavigationHeaderConfiguration();
    }, []);

    const setNavigationHeaderConfiguration = () => {
        props.navigation.setOptions({
            headerStyle: { backgroundColor: COLOR_CONST.white },
            headerTitle: () => (
                <View>
                    <Text style={styles.headerTitleStyle}>Category</Text>
                </View>
            ),
            headerRight: () => (
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate('NotificationScreen')
                        }
                    >
                        <Image
                            source={IMG_CONST.NOTFIY_ON}
                            style={styles.notifIcon}
                        />
                        {/* {showNotificationDot && (
                            <View
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
                            />
                        )} */}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Cart')}
                    >
                        <Image 
                            source={IMG_CONST.CART_BLACK_ICON} 
                            style={styles.cartIcon} 
                        />
                        {/* {cartHasProductFlag && (
                            <View
                                style={{
                                    height: scale(20),
                                    width: scale(20),
                                    borderRadius: scale(10),
                                    backgroundColor: themeJson.config.primaryColor,
                                    borderColor: 'white',
                                    borderWidth: 0.9,
                                    position: 'absolute',
                                    top: scale(-10),
                                    end: scale(-10),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            ><Text style={{ fontSize: scale(10), color: COLOR_CONST.white, fontFamily: FONTS.GTWalsheimProRegular }}>{cartCount}</Text></View>
                        )} */}
                    </TouchableOpacity>
                </View>
            ),
        });
    };

    // const headerTopView = () => {

    //     const { cartHasProductFlag, showNotificationDot, cartCount } = props;

    //     return (
    //         <View style={{ backgroundColor: COLOR_CONST.white, shadowColor: 'transparent', elevation: 0 }}>
    //             <View>
    //                 <Text style={styles.headerTitleStyle}>Category</Text>

    //                 <View style={styles.iconContainer}>
    //                     <TouchableOpacity
    //                     // onPress={() => this.props.navigation.navigate('NotificationScreen')}
    //                     >
    //                         <Image
    //                             source={IMG_CONST.NOTFIY_ON}
    //                             style={styles.notifIcon}
    //                         />
    //                         {showNotificationDot && (
    //                             <View
    //                                 style={{
    //                                     height: scale(6),
    //                                     width: scale(6),
    //                                     borderRadius: scale(3),
    //                                     // backgroundColor: themeJson.config.primaryColor,
    //                                     borderColor: 'white',
    //                                     borderWidth: 0.9,
    //                                     position: 'absolute',
    //                                     top: scale(0),
    //                                     end: scale(2),
    //                                 }}
    //                             />
    //                         )}
    //                     </TouchableOpacity>

    //                     <TouchableOpacity
    //                     // onPress={() => this.props.navigation.navigate('Cart')}
    //                     >
    //                         <Image
    //                             source={IMG_CONST.CART_BLACK_ICON}
    //                             style={styles.cartIcon}
    //                         />
    //                         {showNotificationDot && (
    //                             <View
    //                                 style={{
    //                                     height: scale(6),
    //                                     width: scale(6),
    //                                     borderRadius: scale(3),
    //                                     // backgroundColor: themeJson.config.primaryColor,
    //                                     borderColor: 'white',
    //                                     borderWidth: 0.9,
    //                                     position: 'absolute',
    //                                     top: scale(0),
    //                                     end: scale(2),
    //                                 }}
    //                             />
    //                         )}
    //                     </TouchableOpacity>
    //                 </View>
    //             </View>
    //         </View>
    //     );
    // };

    // setNavigationHeaderConfiguration = () => {
    //     const { cartHasProductFlag, showNotificationDot, cartCount } = this.props;
    //     this.props.navigation.setOptions({
    //         headerStyle: { backgroundColor: COLOR_CONST.white, shadowColor: 'transparent', elevation: 0, },
    //         headerTitle: () => (<View><Text style={styles.headerTitleStyle}>Category</Text></View>),
    //         headerRight: () => (
    //             <View style={styles.iconContainer}>
    //                 <TouchableOpacity
    //                     onPress={() =>
    //                         this.props.navigation.navigate('NotificationScreen')
    //                     }>
    //                     <Image
    //                         source={IMG_CONST.NOTIFICATIONS_ICON}
    //                         style={styles.notifIcon}
    //                     />
    //                     {showNotificationDot && (
    //                         <View
    //                             style={{
    //                                 height: scale(6),
    //                                 width: scale(6),
    //                                 borderRadius: scale(3),
    //                                 // backgroundColor: themeJson.config.primaryColor,
    //                                 borderColor: 'white',
    //                                 borderWidth: 0.9,
    //                                 position: 'absolute',
    //                                 top: scale(0),
    //                                 end: scale(2),
    //                             }}
    //                         />
    //                     )}
    //                 </TouchableOpacity>
    //                 <TouchableOpacity
    //                     onPress={() => this.props.navigation.navigate('Cart')}>
    //                     <Image source={IMG_CONST.CART_BLACK_ICON} style={styles.cartIcon} />
    //                     {cartHasProductFlag && (
    //                         <View
    //                             style={{
    //                                 height: scale(20),
    //                                 width: scale(20),
    //                                 borderRadius: scale(10),
    //                                 // backgroundColor: themeJson.config.primaryColor,
    //                                 borderColor: 'white',
    //                                 borderWidth: 0.9,
    //                                 position: 'absolute',
    //                                 top: scale(-10),
    //                                 end: scale(-10),
    //                                 justifyContent: 'center',
    //                                 alignItems: 'center'
    //                             }}
    //                         ><Text style={{ fontSize: scale(10), color: COLOR_CONST.white, fontFamily: FONTS.GTWalsheimProRegular }}>{cartCount}</Text></View>
    //                     )}
    //                 </TouchableOpacity>
    //             </View>
    //         )
    //     });
    // };

    const renderCategoryListCell = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => onPressCategory(item, false)}
                style={styles.subCategoryCellContainer}
            >
                <Text style={styles.subCatText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    const renderListItem = (item, index) => {
        if (!item.isExpanded) {
            return (
                <TouchableOpacity
                    // onPress={() => onPressCategory(item, true)}
                    style={styles.mainContainer}
                >
                    <View style={styles.left}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.categoryImage }} style={styles.bottleImage} />
                        </View>
                        <Text style={styles.categoryNameText}>{item.name}</Text>
                    </View>
                    {/* {item.sub_categories.length > 0 && <TouchableOpacity onPress={() => this.onPressExpandableView(item, index)} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                        <Image source={IMG_CONST.RIGHT_ARROW} style={styles.rightArrow} />
                    </TouchableOpacity>} */}
                    {/* <TouchableOpacity onPress={() => this.onPressExpandableView(item, index)} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                        <Image source={IMG_CONST.RIGHT_ARROW} style={styles.rightArrow} />
                    </TouchableOpacity> */}
                    <Image source={IMG_CONST.RIGHT_ARROW} style={styles.rightArrow} />
                </TouchableOpacity>
            );
        } else {
            return (
                <View style={styles.downContent}>
                    <View
                        // onPress={() => this.onPressCategory(item, true)}
                        style={styles.downContainer}
                    >
                        <View style={styles.left1}>
                            <View style={styles.imageContainer1}>
                                <Image source={{ uri: item.categoryImage }} style={styles.bottleImage} />
                            </View>
                            <Text style={styles.categoryNameText}>{item.name}</Text>
                        </View>
                        <TouchableOpacity onPress={() => onPressExpandableView(item, index)} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                            <Image source={IMG_CONST.DOWN_ARROW} style={styles.downArrow} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.subCategoryList}>
                        <FlatList
                            // data={subCategories}
                            data={categoryList}
                            renderItem={({ item, index }) => renderCategoryListCell(item, index)}
                        />
                    </View>
                </View>
            );
        }
    }

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" isFocused={true} />
            {/* {headerTopView()} */}
            <View style={styles.listContainer}>
                <FlatList
                    data={categoryList}
                    renderItem={({ item, index }) => renderListItem(item, index)}
                />
            </View>
        </View>
    );
}

export default Explore;