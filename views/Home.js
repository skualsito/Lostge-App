import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CookieManager from 'react-native-cookies';

class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  logout() {
    const {navigate} = this.props.navigation;
    CookieManager.clearAll()
      .then((res) => {
        //console.log('CookieManager.clearAll =>', res);
        this.setState({ token: '' });
        navigate('Login', {name: 'Jane'});
      });
  }
  render() {   
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.Boton} activeOpacity={0.5} onPress={()=> navigate('Genialocaca', {name: 'Jane'})} >
            <View style={styles.contenedorTexto}>
              <Text style={styles.botonTexto}>Genial o Caca</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Boton} activeOpacity={0.5} onPress={()=> navigate('CuantosSeguidores', {name: 'Jane'})} >
            <View style={styles.contenedorTexto}>
              <Text style={styles.botonTexto}>Cuantos seguidores tiene</Text>
            </View>
          </TouchableOpacity>
          <Button title="Cerrar" onPress={()=> this.logout()}></Button>
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

export default Home;
