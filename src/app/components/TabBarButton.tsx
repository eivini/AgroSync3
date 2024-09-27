import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icon } from "@/constants/icon";

const TabBarButton = ({onPress, onLongPress,isFocused,routeName,color,label}: {
    onPress: Function,
    onLongPress: Function,
    isFocused: boolean,
    routeName: string,
    color: string,
    label: string
}) => {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
            >
            
            <Text style={{ color: isFocused ? '#14532d' : 'black' }}>
                {label}
            </Text>
        </Pressable>
    )
}

export default TabBarButton

const styles = StyleSheet.create({})