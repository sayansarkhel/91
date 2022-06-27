import * as React from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    TextInput
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppHeader from '../components/Appheader';

class HomeScreen extends React.Component{

  constructor(){
    super()
    this.state = {
      product: "",
      brand: "",
      location:"",
    } 
  }
  render(){
    const { location, brand, product } = this.state;
    return(
      <View style= {styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      
        <ImageBackground style = {styles.backgroundImage} source = {require("../assets/market1.jpg")}>
        <AppHeader/>
        <Text style = {styles.text}>Homescreen</Text>
          <TextInput
              style={styles.textinput}
              
              placeholder={"Product"}
              placeholderTextColor={"#FFFFFF"}              
              value = {product}
              onChangeText={text => this.setState({ product: text })}             

            />
              <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ brand: text })}
              placeholder={"Brand"}
              placeholderTextColor={"#FFFFFF"}
              value= {brand}
             
            />
               <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={ text => this.setState({ location: text })}
              placeholder={"State"}
              placeholderTextColor={"#FFFFFF"}
              value={location}
              
            />
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.props.navigation.navigate("price")}
            >
              <Text style={styles.buttonText}>submit</Text>
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
   textinput: {
    width: "75%",
    height: 55,
    padding: 10,
    marginLeft:55,
    marginTop:10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: "yellow",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "orange"
  },
  text:{
    fontSize: 25,
        fontWeight: "bold",
        color: "yellow",
        marginTop: 50,
        paddingLeft: 95
  },
   backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },

});
export default HomeScreen;
