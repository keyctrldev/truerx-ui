import { FlatList, Text, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { profileIconsData } from '../../../utils';
import { styles } from './ProfileIconsScreenStyles';
import { profileIconsDataProps } from '../../../types';
import { CustomBackButton, ProfileIconsItem, SafeAreaContainer } from '../../../components';

const ProfileIconsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item, index }: { item: profileIconsDataProps; index: number }) => {
    return (
      <ProfileIconsItem
        lastName={item.lastName}
        isFirstItem={index === 0}
        firstName={item.firstName}
        profileIcon={item.profileIcon}
      />
    );
  };
  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <Text style={styles.headingText}>{'Profile Icons Screen'}</Text>
        <FlatList
          horizontal
          bounces={false}
          data={profileIconsData}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default ProfileIconsScreen;
