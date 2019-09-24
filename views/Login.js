/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';


const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row',justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
        <View style={{width: 50, height: 50}}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./images/instagram-logo.png')}
          />
        </View>
        <View style={{width: 200, height: 100,justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "#f7ad00", fontSize: 20, fontFamily:"Roboto"}}>Ingresar con instagram</Text>
        </View>
    </View>
  );
};



export default App;
