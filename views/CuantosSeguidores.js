import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
} from 'react-native';

class CuantosSeguidores extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {   
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
          <Text style={{color:"#fff"}}>Cuantos seguidores tiene</Text>
          <Button title="Volver" onPress={()=> navigate('Home', {name: 'Jane'})}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#000"
  },
  Boton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    height: 60,
    width: 250,
    borderRadius: 5,
    margin: 5,
  },
  contenedorTexto: {
    width: 250, 
    height: 100,
    justifyContent: "center", 
    alignItems: "center"
  },
  botonTexto: {
    color: "#f7ad00", 
    fontSize: 20, 
    fontFamily:"Roboto"
  }
});

export default CuantosSeguidores;
