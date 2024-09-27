import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import cadastro from '../app/(tabs)/cadastro';
import despesas from '../app/(tabs)/despesasFormulario';
import relatorio from '../app/(tabs)/relatorio';
import saude from '../app/(tabs)/saude/saude';


const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='cadastro'
        component={cadastro}
      />

      <Tab.Screen 
        name='despesas'
        component={despesas}
      />

      <Tab.Screen 
        name='relatorio'
        component={relatorio}
      />

      <Tab.Screen 
        name='saude'
        component={saude}
      />
    </Tab.Navigator>
  )
}