import { Stack } from "expo-router";

export default function DespesasStack() {
    return (
        <Stack screenOptions={{headerShown: false,}}>
            <Stack.Screen name="index" />
        </Stack>
    )
}