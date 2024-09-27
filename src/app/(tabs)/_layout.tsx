import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '../components/TabBar'
import menu from './menu'


const TabLayout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name='index' options={{title: 'menu'}} />
            <Tabs.Screen name='menu' options={{title: 'menu'}}/>

        </Tabs>
    )
}

export default TabLayout