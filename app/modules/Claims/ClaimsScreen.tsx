import React from "react";
import { FlatList, Image, View } from "react-native";
import { AppText, ListViewCell, SafeAreaContainer } from "../../components";
import { styles } from "./ClaimsScreenStyle";
import { claimsData } from "../../utils";
import { Icons } from "../../assets";
import { claimsScreenStrings } from "../../constants";

const ClaimsScreen = () => {
  return (
    <SafeAreaContainer style={styles.claimContainerStyle}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <AppText style={styles.title}>
          {claimsScreenStrings.claimsDemoHeading}
        </AppText>
        <View style={styles.iconContainer}>
          <Image source={Icons.bellIcon} style={styles.icon} />
          <Image source={Icons.profileIcon} style={styles.icon} />
        </View>
      </View>

      {/* Claims History Section */}
      <View style={styles.claimsHistoryContainer}>
        <AppText style={styles.claimsHistoryTitle}>
          {claimsScreenStrings.historyHeading}
        </AppText>
      </View>

      {/* Claims and Status Sections */}
      <View style={styles.claimsStatusRow}>
        <AppText style={styles.columnHeader}>
          {claimsScreenStrings.claimSection}
        </AppText>
        <AppText style={[styles.columnHeader, styles.statusText]}>
          {claimsScreenStrings.statusSection}
        </AppText>
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
    </SafeAreaContainer>
  );
};
export default ClaimsScreen;
