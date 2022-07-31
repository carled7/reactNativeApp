import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from '../src/screens/Home.js';
import UpdateStats from '../src/screens/UpdateStats.js';

const screens = {
    Home:{
        screen: Home
    },
    UpdateStats: {
        screen: UpdateStats
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);