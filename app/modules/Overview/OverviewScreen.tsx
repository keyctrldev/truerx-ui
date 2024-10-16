import React from 'react';
import { AppText, CustomHeader, SafeAreaContainer } from '../../components';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { headerComponentStrings, overViewScreenStrings } from '../../constants';
import useOverViewScreen from './useOverViewScreen';
import { styles } from './OverViweScreen';

const OverviewScreen = () => {
  const { handleUserPress } = useOverViewScreen();

  const renderUsers = ({ item, index }: any) => {
    return (
      <TouchableOpacity style={styles.subContainer} key={`user=${index}`} onPress={() => handleUserPress(item)}>
        <Image source={{ uri: 'https://robohash.org/Ankit' }} style={styles.userImage} />
        <View>
          <AppText style={styles.userNameTxt}>{item?.name ? item?.name : overViewScreenStrings.NotFound}</AppText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomHeader heading={headerComponentStrings.Overview} />
      <View style={styles.body}>
        <FlatList data={[]} renderItem={renderUsers} contentContainerStyle={styles.flatlistContainer} />
      </View>
    </SafeAreaContainer>
  );
};

export default OverviewScreen;
