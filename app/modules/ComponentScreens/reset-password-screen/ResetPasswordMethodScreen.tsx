import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { resetPasswordMethods } from '../../../constants';
import { ResetPasswordMethodProps } from '../../../types';
import { styles } from './ResetPasswordMethodScreenStyles';
import { CustomResetPasswordMethodComponent, SafeAreaContainer } from '../../../components';

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
