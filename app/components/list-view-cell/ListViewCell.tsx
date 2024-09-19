import React from "react";
import { View } from "react-native";
import { styles } from "./ListViewCellStyle";
import AppText from "../app-text/AppText";

interface ListViewCellProps {
  typeOfConsultance: string;
  Description: string;
  status: string;
  colorCode: string;
}

const ListViewCell = ({
  typeOfConsultance,
  Description,
  status,
  colorCode,
}: ListViewCellProps) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.headingContainer}>
        <AppText style={styles.listHeading}>{typeOfConsultance}</AppText>
        <AppText style={styles.listDetails}>{Description}</AppText>
      </View>
      <View style={styles.statusContainer}>
        <AppText style={[styles.statusTextStyle, { color: colorCode }]}>
          {status}
        </AppText>
      </View>
    </View>
  );
};
export default ListViewCell;
