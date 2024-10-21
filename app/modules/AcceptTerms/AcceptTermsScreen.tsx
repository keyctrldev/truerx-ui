import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  FlatList,
  UIManager,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

import { Colors } from '../../theme';
import { Icons } from '../../assets';
import { styles } from './AcceptTermsScreenStyles';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { CustomButton, SafeAreaContainer } from '../../components';
import { acceptTermsScreenStrings, agreementTermsList } from '../../constants';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AcceptTermsScreen = () => {
  const GlobalStyles = useGlobalStyles();

  const [isExpandView, setIsExpandView] = useState<number>(0);

  const renderItem = ({ item }: { item: { id: number; title: string; subText?: string } }) => {
    const isExpandedView = isExpandView === item.id;

    const handleExpandView = () => {
      setIsExpandView(isExpandedView ? 0 : item.id);
      LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.linear, duration: 200 });
    };

    return (
      <View
        style={[
          styles.expandedBtnContainer,
          isExpandedView ? styles.expandedContainer : styles.closeContainer,
          item.id == 1 && styles.topContainerStyle,
        ]}>
        <View style={GlobalStyles.rowSpaceBetweenContainer}>
          <Text style={styles.btnTitleText}>{item.title}</Text>
          <TouchableOpacity onPress={handleExpandView}>
            <Image
              source={Icons.dropDownArrowIcon}
              style={[GlobalStyles.commonIconStyle, isExpandedView ? styles.downIconStyle : styles.upIconStyle]}
            />
          </TouchableOpacity>
        </View>
        {isExpandedView && (
          <View style={styles.scrollableContentContainer}>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
              <Text style={styles.subTitleText}>{item.subText}</Text>
            </ScrollView>
          </View>
        )}
      </View>
    );
  };

  const footerBtnContainer = () => {
    return (
      <View style={[GlobalStyles.rowContainer]}>
        <CustomButton
          title={acceptTermsScreenStrings.Decline}
          onPress={() => {}}
          customStyle={styles.declineBtnContainer}
          buttonLabelStyle={styles.declineBtnText}
        />
        <CustomButton
          title={acceptTermsScreenStrings.Accept}
          onPress={() => {}}
          customStyle={styles.acceptBtnContainer}
        />
      </View>
    );
  };

  return (
    <SafeAreaContainer style={GlobalStyles.mainContainerStyle} statusBarColor={Colors.secondaryBackground}>
      <Text style={styles.agreementTextStyle}>{acceptTermsScreenStrings.AgreementToTerms}</Text>
      <FlatList
        data={agreementTermsList}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListFooterComponent={footerBtnContainer}
      />
    </SafeAreaContainer>
  );
};

export default AcceptTermsScreen;
