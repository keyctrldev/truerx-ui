import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { resetPasswordMethods } from '../../utils';
import { ResetPasswordMethodProps } from '../../types';
import { Colors, horizontalScale, verticalScale } from '../../theme';
import { CustomResetPasswordMethodComponent, SafeAreaContainer } from '../../components';

const ResetPasswordMethodScreen = () => {
  const [isSelected, setIsSelected] = useState<number>(0);

  const renderResetPasswordMethodItem = ({ item }: { item: ResetPasswordMethodProps }) => {
    const handleSelectPasswordMethod = () => {
      setIsSelected(item.id);
    };
    return (
      <CustomResetPasswordMethodComponent
        icon={item.icon}
        isSelected={isSelected == item.id}
        onSelectMethod={handleSelectPasswordMethod}
        style={styles.resetPasswordContainer}
        title={item.title}
        subTitle={item.subTitle}
      />
    );
  };

  return (
    <SafeAreaContainer style={styles.container}>
      <FlatList data={resetPasswordMethods} renderItem={renderResetPasswordMethodItem} />
    </SafeAreaContainer>
  );
};

export default ResetPasswordMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(10),
  },
  resetPasswordContainer: {
    marginVertical: verticalScale(8),
  },
});
