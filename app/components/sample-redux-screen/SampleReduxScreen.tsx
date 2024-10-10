import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import CustomButton from '../custom-button/CustomButton';
import { decrement, increment } from '../../store/CounterSlice';
import AppText from '../app-text/AppText';

const SampleReduxScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <AppText>{count}</AppText>
      <CustomButton title="Increment" onPress={() => dispatch(increment())}></CustomButton>
      <CustomButton title="Decrement" onPress={() => dispatch(decrement())}></CustomButton>
    </View>
  );
};
export default SampleReduxScreen;
