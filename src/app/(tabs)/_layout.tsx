import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '../components/TabBar'
import { StatusBar } from 'react-native'


const TabLayout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />}>
            
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'transparent'}
                translucent
            />
            
            <Tabs.Screen name='index' options={{title: ''}}/>
            <Tabs.Screen name='menu' options={{title: 'Menu'}}/>
            <Tabs.Screen name='saude' options={{title: 'Saude'}}/>
            <Tabs.Screen name='relatorio' options={{title: 'Relatorio'}}/>
            <Tabs.Screen name='despesas' options={{title: 'Despesas'}}/>

        </Tabs>
    )
}

export default TabLayout