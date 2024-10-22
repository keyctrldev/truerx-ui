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
        <Text style={styles.buttonTextStyle}>{item.componentTitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomHeader heading={headerComponentStrings.Overview} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={componentListView}
        renderItem={renderComponentList}
        style={styles.listViewContainer}
      />
    </SafeAreaContainer>
  );
};

export default OverviewScreen;
