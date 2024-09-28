import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '../components/TabBar'


const TabLayout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />}>
            
            <Tabs.Screen name='index' options={{title: ''}}/>
            <Tabs.Screen name='menu' options={{title: 'Menu'}}/>
            <Tabs.Screen name='saude' options={{title: 'Saude'}}/>
            <Tabs.Screen name='relatorio' options={{title: 'Relatorio'}}/>
            <Tabs.Screen name='despesasFormulario' options={{title: 'Despesas'}}/>

        </Tabs>
    )
}

export default TabLayout