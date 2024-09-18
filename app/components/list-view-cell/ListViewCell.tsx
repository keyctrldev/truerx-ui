import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ListViewCellStyle";
import { ClaimsData } from "../../types";
const ListViewCell = ({
  typeOfConsultance,
  Description,
  status,
  colorCode,
}: ClaimsData) => {
  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.listHeading}>{typeOfConsultance}</Text>
        <Text style={styles.listDetails}>{Description}</Text>
      </View>
      <Text style={{ color: colorCode }}>{status}</Text>
    </View>
  );
};
export default ListViewCell;
