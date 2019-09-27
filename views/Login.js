/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import InstagramLogin from 'react-native-instagram-login';
import CookieManager from 'react-native-cookies';


class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount(){
    const {navigate} = this.props.navigation;
    CookieManager.get('https://instagram.com')
    .then((res) => {
      //console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
      if (res.sessionid) {
        navigate('Home', {name: 'Jane'});
      }
    });
  }
    
  render() {   
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.BotonInstagram} activeOpacity={0.5} onPress={()=> this.instagramLogin.show()} >
            <View style={styles.imagenEstilo}>
              <Image
                style={styles.imagenEstilo}
                source={require('./images/instagram-logo.png')}
              />
            </View>
            <View style={styles.contenedorTexto}>
              <Text style={styles.instagramTexto}>Ingresar con instagram</Text>
            </View>
          </TouchableOpacity>
          <InstagramLogin
              ref= {ref => this.instagramLogin= ref}
              clientId='0c3e91cdf3824ce5828d9a14c986fe01'
              redirectUrl='http://ckrol.com'
              scopes={['basic']}
              onLoginSuccess={(token) => {
                navigate('Home', {name: 'Jane'});
                this.setState({ token: token });
              }}
              onLoginFailure={(data) => console.log(data)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#000"
  },
  BotonInstagram: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#dc4e41',
    height: 60,
    width: 250,
    borderRadius: 5,
    margin: 5,
  },
  imagenEstilo : {
    width: 50, 
    height: 50
  },
  contenedorTexto: {
    width: 200, 
    height: 100,
    justifyContent: "center", 
    alignItems: "center"
  },
  instagramTexto: {
    color: "#f7ad00", 
    fontSize: 20, 
    fontFamily:"Roboto"
  }
});

export default Login;
