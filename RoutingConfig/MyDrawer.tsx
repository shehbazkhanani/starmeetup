import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Drawer.Screen name="Home Screen" component={Home} />
    </Drawer.Navigator>
  );
}

export default MyDrawer