import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './views/Login';
import Home from './views/Home';
import Genialocaca from './views/Genialocaca';
import CuantosSeguidores from './views/CuantosSeguidores';

const Router = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Genialocaca: { screen: Genialocaca },
    CuantosSeguidores: { screen: CuantosSeguidores },
});

const App = createAppContainer(Router);

export default App;