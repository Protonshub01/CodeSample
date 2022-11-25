import React from 'react'
import {
  View, SafeAreaView, FlatList, Image, Text
} from 'react-native'
import Button from '../../../theme/Button';
import * as IMG_CONST from '../../../theme/ImageConstants';
import styles from './WishlistStyle';


const Wishlist = (props) => {

  renderEmptyDataView = (props) => {
    return (
      <View style={styles.emtpyAddressContainer}>
        <View style={styles.cartempty}>
          <Image
            source={IMG_CONST.EMPTY_WISHLIST_ICON}
            style={styles.emptyAddressIcon} />
          <Text style={styles.noAnyOrder}>You haven't selected Favorite food!</Text>
          <Text style={styles.youhave}>Explore more and shortlist some food</Text>
        </View>
        <Button
          buttonText={'Browse Products'}
          btnStyles={styles.loginButton}
          btnTextStyles={styles.loginText}
          buttonPress={() => navigation.navigate('Home')}
        />
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFF" isFocused={true} />
        { !this.state.noProductFound ?
          <> */}
      {/* <View style={this.state.wishlistData.length ===1 ? styles.listContainerOne : styles.listContainer}>
          <FlatList
            numColumns={2}
            extraData={this.state.RefreshFlatList}
            data={this.state.wishlistData}
            renderItem={this.renderListItem}
          />
        </View> */}
      {/* </> : */}
      {renderEmptyDataView(navigation = props.navigation)}
      {/* } */}
    </SafeAreaView>
  );
};

export default Wishlist;