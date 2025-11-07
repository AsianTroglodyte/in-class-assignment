import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function About () {
    return (
        <SafeAreaView>
            <Text>
                About This App
            </Text>
            <Text>
                This Project Demonstrates Navigationa and shared state in 
                Expo Router.
            </Text>
            <Button title={"Close"}/>
        </SafeAreaView>
    )
}