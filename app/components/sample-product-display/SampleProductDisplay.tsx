import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, incrementSkip } from '../../store/ProductSlice';
import { RootState, AppDispatch } from '../../store';
import './SampleProductDisplayStyle';
import { styles } from './SampleProductDisplayStyle';
import AppText from '../app-text/AppText';

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, skip, limit, status, hasMore } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    if (hasMore) {
      dispatch(fetchProducts({ skip, limit }));
    }
  }, [dispatch, skip, limit, hasMore]);

  const loadMore = () => {
    if (hasMore && status !== 'loading') {
      dispatch(incrementSkip());
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.cardContainer}>
      <AppText>{item.id}</AppText>
      <AppText>{item.title}</AppText>
    </View>
  );

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={status === 'loading' ? <ActivityIndicator /> : null}
      />
    </View>
  );
};
export default ProductList;
