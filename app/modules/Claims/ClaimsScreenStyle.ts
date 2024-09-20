import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export const styles = StyleSheet.create({
    claimContainerStyle: {
        flex: 1,
        backgroundColor: Colors.skyBlue
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: Colors.white, 
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: Colors.lightSlateGray, 
      },
      title: {
        fontSize: 32,
        fontWeight: "bold",
        color: Colors.green,
      },
      iconContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      icon: {
        marginLeft: 16, 
        width: 34,
        height: 32,
      },
      claimsHistoryContainer: {
        backgroundColor: Colors.gray,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightSlateGray,
      },
      claimsHistoryTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.horizonBlue,
      },
      claimsStatusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: Colors.gray,
      },
      columnHeader: {
        fontSize: 20,
        fontWeight: 'regular',
        color: Colors.lightBlack,
      },
      statusText: {
        marginRight: 40,
      },
})