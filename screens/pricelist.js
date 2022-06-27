import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity, ImageBackground,SafeAreaView,Platform,StatusBar} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppHeader from '../components/Appheader';

class Pricelist extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
      <ImageBackground style = {styles.backgroundImage} source = {require("../assets/market1.jpg")}>

        <AppHeader/>
        
      
        <Text style={styles.text}>List of products</Text>
       

       <TouchableOpacity
              style={[styles.button, { marginTop: 150 }]}
              onPress={() => this.props.navigation.navigate("home")}
            >
              <Text style={styles.buttonText}>Return</Text>
            </TouchableOpacity>
            
             </ImageBackground>
             
   
    </View>
     );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
   droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  textContainer:{
    backgroundColor: 'blue',
  },
 text:{
    fontSize: 30,
        fontWeight: "bold",
        color: "orange",
        marginTop: 50,
        paddingLeft: 75
  },
      button: {
    width: "43%",
    height: 25,
    marginLeft:105,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  },
   backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
});

export default Pricelist;