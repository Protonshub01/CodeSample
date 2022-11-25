import React, { useState } from 'react';

import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    FlatList,
    SafeAreaView
} from 'react-native';
import styles from '../Search/SearchStyle';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import * as IMG_CONST from '../../../theme/ImageConstants';
import COLOR_CONST, { FONTS } from '../../../theme/ColorConstants';
import scale, { verticalScale } from '../../../utils/Scale';
import SearchBox from '../../../theme/SearchBox';

const categoryList = [
    {
        categoryName: "Burger",
        categoryImage: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
    },
    {
        categoryName: "Healthy",
        categoryImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MiVL2nmDsdhF8Xnt5lbvDjElKF0m5KJXEg&usqp=CAU"
    },
    {
        categoryName: "Paneer",
        categoryImage: "https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-740x710.jpeg"
    },
    {
        categoryName: "Chicken",
        categoryImage: "https://www.mydelicious-recipes.com/home/images/227_735_820/mydelicious-recipes-chicken-65"
    },
    {
        categoryName: "Chaat",
        categoryImage: "https://www.whiskaffair.com/wp-content/uploads/2018/11/Papdi-Chaat-2-1.jpg"
    },
    {
        categoryName: "Pizza",
        categoryImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*"
    },
    {
        categoryName: "Rolls",
        categoryImage: "https://img4.nbstatic.in/tr:w-500/5ad49ca6590801000cc7ffb5.jpg"
    },
    {
        categoryName: "Dosa",
        categoryImage: "https://www.ticklingpalates.com/wp-content/uploads/2022/03/plain-dosa-with-dosa-batter-made-in-mixie-jar.jpg"
    },
];


const Search = () => {

    const [dishFilter, setDishDFilter] = useState(categoryList);

    const searchDish = (textToSearch) => {
        // alert(textToSearch);
        if (!textToSearch) {
            setDishDFilter(categoryList);
        }
        else {
            setDishDFilter(
                dishFilter.filter(i =>
                    i.categoryName.toLowerCase().includes(textToSearch.toLowerCase()),
                ),
            );
        }
    };

    const renderSearchBar = () => {
        return (
            <View style={styles.SearchBarContainer}>
                <SearchBox
                    searchPlaceholder="Search dish.."
                    searchChange={text => { searchDish(text) }}
                />
            </View>
        );
    };

    const renderListItemCat = (item, index) => {
        return (
            <TouchableOpacity
                // onPress={() => props.onPressCategory(item)}
                style={styles.categoryContainer}
            >
                <View style={styles.categoryView}>
                    <Image source={{ uri: item.categoryImage }} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>{item.categoryName}</Text>
            </TouchableOpacity>
        );
    };

    const renderCategory = () => {
        return (
            <View>
                <Text style={styles.recentText}>Categories</Text>
                <View style={styles.listContainer}>
                    <FlatList
                        numColumns={3}
                        data={dishFilter}
                        renderItem={({ item, index }) => renderListItemCat(item, index)}
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFF" isFocused={true} />
            <SafeAreaView>
                {renderSearchBar()}
                <ScrollView>
                    {renderCategory()}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Search;