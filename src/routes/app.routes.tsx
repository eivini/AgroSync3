import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../app/(tabs)/menu';
import Saude from '../app/(tabs)/saude'; 
import Relatorio from '../app/(tabs)/relatorio';
import Despesas from '../app/(tabs)/despesas';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='menu' screenOptions={{ headerShown: false }}>
      <Screen 
        name='menu'
        component={Menu}
      />

      <Screen 
        name='saude'
        component={Saude}
      />

      <Screen 
        name='relatorio'
        component={Relatorio}
      />

      <Screen 
        name='despesas'
        component={Despesas}
      />
    </Navigator>
  );
}
