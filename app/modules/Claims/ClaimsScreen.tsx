import React from "react";
import { SafeAreaView, View } from "react-native";
import { ListViewCell } from "../../components";
import { styles } from "./ClaimsScreenStyle";
import { claimsData } from "../../utils";
const ClaimsScreen = () => {
  return (
    <SafeAreaView style={styles.claimContainerStyle}>
      <View style={styles.clainContent}>
        {claimsData.map((item, index) => (
          <ListViewCell          
            typeOfConsultance={item.typeOfConsultance}
            status={item.status}
            Description={item.Description}
            colorCode={item.colorCode}
            key={index}
          ></ListViewCell>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default ClaimsScreen;
