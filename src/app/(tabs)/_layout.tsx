import React from 'react'
import { Tabs } from 'expo-router'
import { StatusBar } from 'react-native'
import { AntDesign, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'


export default function TabsLayout() {
    return (
        <>
        <StatusBar 
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent
        />
        <Tabs screenOptions={{ headerShown: false }}>

            <Tabs.Screen 
                name='index'
                options={{ 
                    tabBarLabel: "", 
                    title: "",
                }} 
            />

            <Tabs.Screen 
                name='menu'
                options={{ 
                    tabBarLabel: "Menu", 
                    title: "Menu",
                    tabBarIcon: () => <AntDesign name="home"  size={30} color="#1E4034"/>
                }} 
            />

            <Tabs.Screen 
                name='saude'
                options={{ 
                    tabBarLabel: "Saude", 
                    title: "Saude",
                    tabBarIcon: () => <FontAwesome5 name="notes-medical" size={24} color="#1E4034" />
                }}
            />

            <Tabs.Screen
                name='despesas'
                options={{
                    tabBarLabel: "Despesas",
                    title: "Saude",
                    tabBarIcon: () => <FontAwesome6 name="money-bills" size={24}  color="#1E4034" />
                }}
            />

            <Tabs.Screen
                name='relatorio'
                options={{
                    tabBarLabel: "Relatório",
                    title: "Relatório",
                    tabBarIcon: () => <Ionicons name="document-text-outline" size={24} color="#1E4034" />
                }}
            />

        </Tabs>
        </>
    )
}

