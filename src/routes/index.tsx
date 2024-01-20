import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import PlaceSelectScreen from '../screens/place-select-screen';
import RideType from '../screens/ride-type/ride-type';const Stack = createStackNavigator();
import TabRouter from './tab-routes';
const Routes = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabRouter" component={TabRouter} options={{presentation:"modal"}}/>
        <Stack.Screen name="PlaceSelectScreen" component={PlaceSelectScreen} options={{presentation:"modal"}}/>
        <Stack.Screen name="RideType" component={RideType} options={{presentation:"modal"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
