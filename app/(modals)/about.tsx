import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function About () {
    const router = useRouter();

    return (
        <SafeAreaView style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
            padding: 10
        }}>
            <Text>
                About This App
            </Text>
            <Text>
                This Project Demonstrates Navigation and shared state in Expo Router.
            </Text>
            <Button title={"Close"} onPress={router.back}/>
        </SafeAreaView>
    )
}