import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '../components/TabBar'


const TabLayout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />}>
            
            <Tabs.Screen name='menu' options={{title: 'Menu'}}/>
            <Tabs.Screen name='saude' options={{title: 'Saude'}}/>

        </Tabs>
    )
}

export default TabLayout