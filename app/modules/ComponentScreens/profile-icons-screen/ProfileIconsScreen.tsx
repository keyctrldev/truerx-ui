import { FlatList, Text } from 'react-native';

import { profileIconsData } from '../../../utils';
import { styles } from './ProfileIconsScreenStyles';
import { profileIconsDataProps } from '../../../types';
import { SafeAreaContainer } from '../../../components';
import ProfileIconsItem from '../../../components/profile-icons/ProfileIconsItem';

const ProfileIconsScreen = () => {
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
    <SafeAreaContainer style={styles.container}>
      <Text style={styles.headingText}>{'Profile Icons Screen'}</Text>
      <FlatList
        horizontal
        bounces={false}
        data={profileIconsData}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaContainer>
  );
};

export default ProfileIconsScreen;
