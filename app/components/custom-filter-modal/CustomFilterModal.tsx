import React, { memo, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import Modal from 'react-native-modal';

import AppText from '../app-text/AppText';
import { filterDataList } from '../../utils';
import { styles } from './CustomFilterModalStyles';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { customFilterModalComponent } from '../../constants';
import { FilterDataListProps, FilterModalProps } from '../../types';
import { ActiveRadioIcon, InActiveRadioIcon } from '../../assets/svgs';

const CustomFilterModal = (props: FilterModalProps) => {
  const { isVisible, onClose, onDonePress } = props;
  const [isSelectFilter, setIsSelectFilter] = useState<number>(0);
  const GlobalStyles = useGlobalStyles();

  const handleSelectFilter = (id: number) => {
    setIsSelectFilter(id);
    onDonePress(id);
    onClose();
  };

  const renderFilterList = ({ item }: { item: FilterDataListProps }) => {
    const selectedFilter = item.id == isSelectFilter;
    return (
      <View style={[GlobalStyles.rowSpaceBetweenContainer, styles.radioBtnContainer]}>
        <AppText style={styles.filerNameStyle}>{item.filterName}</AppText>
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleSelectFilter(item.id)}>
          {selectedFilter ? <ActiveRadioIcon /> : <InActiveRadioIcon />}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      statusBarTranslucent={true}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationIn={'slideInLeft'}
      animationOut={'slideOutRight'}>
      <View style={styles.modalContainer}>
        <Text style={styles.titleTextStyle}>{customFilterModalComponent.filterByDateRange}</Text>
        <View style={[GlobalStyles.itemSeparatorStyle, styles.itemSeparatorContainer]} />
        <FlatList data={filterDataList} renderItem={renderFilterList} />
      </View>
    </Modal>
  );
};

export default memo(CustomFilterModal);
