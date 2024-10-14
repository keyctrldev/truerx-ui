import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setPage } from '../../store/ProductSlice';
import { RootState, AppDispatch } from '../../store';
import CustomButton from '../custom-button/CustomButton';
import './SampleProductDisplayStyle';
import { styles } from './SampleProductDisplayStyle';

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error, page, limit } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page, limit }));
  }, [dispatch, page, limit]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text>
              {item.id}.{item.title}
            </Text>
          </View>
        )}
      />
      <View>
        <CustomButton
          title="previous"
          onPress={() => {
            dispatch(setPage(page - 1));
          }}></CustomButton>
        <CustomButton
          title="next"
          onPress={() => {
            dispatch(setPage(page + 1));
          }}></CustomButton>
      </View>
    </View>
  );
};
export default ProductList;
