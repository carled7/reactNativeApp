import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { UpdateFood } from '../screens/UpdateFood';
import { UpdateWater } from '../screens/UpdateWater';

export const StackRoutes = () => {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
                
            />
            <Screen
                name="UpdateFood"
                component={UpdateFood}
                options={{headerShown: false}}
            />
            <Screen
                name="UpdateWater"
                component={UpdateWater}
            />
        </Navigator>
    )
}