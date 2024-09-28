import { Stack } from "expo-router";

export default function SaudeStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Saude' }} />
        </Stack>
    )
}