import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./routes";
import { StatusBar } from 'react-native'

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar />
            <TabRoutes />
        </NavigationContainer>
    )
}