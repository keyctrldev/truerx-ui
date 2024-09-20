import React from "react";
import { FlatList, Image, SafeAreaView,View } from "react-native";
import { AppText, ListViewCell } from "../../components";
import { styles } from "./ClaimsScreenStyle";
import { claimsData } from "../../utils";
import { Icons } from "../../assets";
import { loginScreenStrings } from "../../constants";

const ClaimsScreen = () => {
  return (
    <SafeAreaView style={styles.claimContainerStyle}>
      
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <AppText style={styles.title}>{loginScreenStrings.claimsDemoHeading}</AppText>
        <View style={styles.iconContainer}>
          <Image source={Icons.bellIcon} style={styles.icon}/>
          <Image source={Icons.profileIcon} style={styles.icon}/>
        </View>
      </View>

      {/* Claims History Section */}
      <View style={styles.claimsHistoryContainer}>
        <AppText style={styles.claimsHistoryTitle}>{loginScreenStrings.historyHeading}</AppText>
        </View>

        {/* Claims and Status Sections */}
        <View style={styles.claimsStatusRow}>
          <AppText style={styles.columnHeader}>{loginScreenStrings.claimSection}</AppText>
          <AppText style={[styles.columnHeader,styles.statusText]}>{loginScreenStrings.statusSection}</AppText>
        </View>

      <FlatList
        data={claimsData}
        bounces={false}
        keyExtractor={(_, index) => `${index}claimItem`}
        renderItem={({ item, index }) => (
          <ListViewCell
            typeOfConsultance={item.typeOfConsultance}
            status={item.status}
            Description={item.Description}
            colorCode={item.colorCode}
            key={index}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default ClaimsScreen;
