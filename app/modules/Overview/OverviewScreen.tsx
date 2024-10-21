import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

import { styles } from './OverviewScreenStyles';
import { headerComponentStrings } from '../../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomHeader, SafeAreaContainer } from '../../components';
import { componentListProps, componentListView } from '../../utils';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const OverviewScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const renderComponentList = ({ item }: { item: componentListProps }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.screenName);
        }}
        style={styles.btnContainer}>
        <Text>{item.componentTitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomHeader heading={headerComponentStrings.Overview} />
      <FlatList data={componentListView} renderItem={renderComponentList} />
    </SafeAreaContainer>
  );
};

export default OverviewScreen;
