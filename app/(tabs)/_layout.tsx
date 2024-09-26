import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="cadastro"
          options={{
            title: 'Cadastro',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />

        <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
        />
        <Tabs.Screen
        name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
        />
        <Tabs.Screen
        name="saude"
        options={{
            title: 'Saude',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="google" color={color} />,
        }}
        />
    </Tabs>
  );
}
