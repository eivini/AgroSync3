import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#14532d' }}>
        <Tabs.Screen
        name="index"
        options={{
            title: 'Menu',
            tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
        }}
        />
        <Tabs.Screen
        name="saude"
        options={{
            title: 'Saude',
            tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="notes-medical" color={color} />,
        }}
        />
        <Tabs.Screen
        name="despesasFormulario"
        options={{
            title: 'Formulario',
            tabBarIcon: ({ color }) => <FontAwesome6 name="money-bills" size={24} color="black" />,
        }}
        />
        <Tabs.Screen
        name="relatorio"
        options={{
            title: 'Relatorio',
            tabBarIcon: ({ color }) => <Ionicons name="document-text-outline" size={24} color="black" />,
        }}
        />
    </Tabs>
  );
}
