import { View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { styles } from './CustomTextButtonScreenStyles';
import { MailIcon, RefreshIcon } from '../../../assets/svgs';
import { horizontalScale, verticalScale } from '../../../theme';
import { AppText, CustomBackButton, CustomTextButton, SafeAreaContainer } from '../../../components';

const CustomTextButtonScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <View style={styles.mainInterface}>
          <AppText>{'Only Text'}</AppText>
          <CustomTextButton onPress={() => {}} textContent={'Already a member? Sign in.'} />
          <AppText>{'Pass textStyle'}</AppText>
          <CustomTextButton
            onPress={() => {}}
            textStyle={styles.textStyle}
            textContent={'Already a member? Sign in.'}
          />
          <AppText>{'Pass containerStyle'}</AppText>
          <CustomTextButton
            onPress={() => {}}
            textStyle={styles.textStyle}
            containerStyle={styles.containerStyle}
            textContent={'Already a member? Sign in.'}
          />
          <AppText>{'Left & Right Icon'}</AppText>
          <CustomTextButton
            onPress={() => {}}
            leftIcon={<RefreshIcon />}
            rightIcon={<RefreshIcon />}
            textStyle={styles.textStyle}
            textContent={'Already a member? Sign in.'}
          />
          <AppText>{'Left & Right Icon Styles'}</AppText>
          <CustomTextButton
            onPress={() => {}}
            leftIcon={<RefreshIcon />}
            rightIcon={<MailIcon width={horizontalScale(20)} height={verticalScale(20)} />}
            textStyle={styles.textStyle}
            leftIconStyles={styles.leftIconStyles}
            rightIconStyles={styles.rightIconStyles}
            textContent={'Already a member? Sign in.'}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default CustomTextButtonScreen;