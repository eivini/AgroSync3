import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Screen = ({text}: {text: string}) => {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <Screen text='homepage'/>} />
      <Tab.Screen name="Settings" component={() => <Screen text='Settings'/>} />
    </Tab.Navigator>
  );
}