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

import { Icons } from '../../assets';
import { agreementTermsList } from '../../utils';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { acceptTermsScreenStrings } from '../../constants';
import { CustomButton, SafeAreaContainer } from '../../components';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

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
          <Text style={styles.termsTitleText}>{item.title}</Text>
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

const styles = StyleSheet.create({
  backTextStyle: {
    fontSize: moderateScale(12),
    color: Colors.black,
  },
  agreementTextStyle: {
    fontSize: moderateScale(26),
    color: Colors.black,
    fontWeight: 'bold',
    marginBottom: horizontalScale(12),
  },
  backBtnContainer: {
    marginTop: horizontalScale(12),
  },
  expandedBtnContainer: {
    padding: horizontalScale(12),
    borderWidth: horizontalScale(1),
    borderColor: Colors.overlayDark,
  },
  termsTitleText: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: Colors.black,
  },
  subTitleText: {
    fontSize: moderateScale(12),
    color: Colors.black,
  },
  declineBtnContainer: {
    width: '50%',
    backgroundColor: Colors.overlayDark,
    borderBottomLeftRadius: horizontalScale(10),
  },
  acceptBtnContainer: {
    width: '50%',
    backgroundColor: Colors.primaryBtnBackground,
    borderBottomRightRadius: horizontalScale(10),
  },
  scrollableContentContainer: {
    height: verticalScale(450),
    overflow: 'hidden',
    marginTop: horizontalScale(10),
  },
  topContainerStyle: {
    borderTopStartRadius: horizontalScale(10),
    borderTopEndRadius: horizontalScale(10),
  },
  expandedContainer: {
    backgroundColor: Colors.white,
  },
  closeContainer: {
    backgroundColor: Colors.secondaryBackground,
  },
  downIconStyle: {
    transform: [{ rotate: '180deg' }],
  },
  upIconStyle: {
    transform: [{ rotate: '0deg' }],
  },
  declineBtnText: {
    color: Colors.black,
  },
});

export default AcceptTermsScreen;
