import { StyleSheet } from "react-native";
import { Colors } from '../../theme';

export const styles = StyleSheet.create({
    listContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#8C9CA5',
        padding:20,
    },
    listHeading:{
      color:Colors.white,
      fontWeight:'400',
    },
    listDetails:{
        width:150,
        marginTop:10,
        color:Colors.white,
    }
});