import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ListViewCellStyle";
interface claimData {
  typeOfConsultance: string;
  Description: string;
  status: string;
  colorCode:string;
}
interface Props {
  claimDetails: claimData;
}
const ListViewCell:React.FC<Props>= ({claimDetails}) => {
  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.listHeading}>{claimDetails.typeOfConsultance}</Text>
        <Text style={styles.listDetails}>{claimDetails.Description}</Text>
      </View>
      <Text style={{color:claimDetails.colorCode}}>{claimDetails.status}</Text>
    </View>
  );
};
export default ListViewCell;
