import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import cadastro from '../app/(tabs)/menu';



const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='cadastro'
        component={cadastro}
      />

    </Tab.Navigator>
  )
}