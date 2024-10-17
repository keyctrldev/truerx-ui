import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CustomHeader, SafeAreaContainer } from '../../components';
import { Colors, verticalScale } from '../../theme';
import { headerComponentStrings, Routes } from '../../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { componentListProps, componentListView } from '../../utils';

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

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },
  btnContainer: {
    backgroundColor: Colors.white,
    padding: verticalScale(9),
    margin: verticalScale(5),
    borderRadius: verticalScale(8),
    alignItems: 'center',
  },
});
