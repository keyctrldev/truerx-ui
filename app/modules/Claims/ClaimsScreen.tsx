import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { ListViewCell } from "../../components";
import { styles } from "./ClaimsScreenStyle";
import { claimsData } from "../../utils";

const ClaimsScreen = () => {
  return (
    <SafeAreaView style={styles.claimContainerStyle}>
      <FlatList
        data={claimsData}
        bounces={false}
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
