import React from "react";
import { SafeAreaView, View } from "react-native";
import { ListViewCell } from "../../components";
import { styles } from "./ClaimsScreenStyle";
const claimsData = [
  {
    typeOfConsultance: "PCP consultation",
    Description:
      "Claim for a routine consultation with a primary care physician",
    status: "Proceesing",
    colorCode:'orange'
  },
  {
    typeOfConsultance: "Specialist Consultation - Cardiologist",
    Description: "Claim for a consultation with a cardiologist",
    status: "Settled",
    colorCode:'green'
  },
  {
    typeOfConsultance: "Specialist Consultation - Cardiologist",
    Description: "Claim for a consultation with a cardiologist",
    status: "Canceled",
    colorCode:'red'
  },
];
const ClaimsScreen = () => {
  return (
    <SafeAreaView style={styles.claimContainerStyle}>
      <View style={styles.clainContent}>
        {claimsData.map((item, index) => (
          <ListViewCell claimDetails={item} key={index}></ListViewCell>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default ClaimsScreen;
