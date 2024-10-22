import React, { useEffect, useState } from 'react';
import { ActivityLoader, CustomBackButton } from '../../../components';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const ActivityLoaderScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <ActivityLoader isVisible={isLoading} color={'black'} />
    </>
  );
};

export default ActivityLoaderScreen;
