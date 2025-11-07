import { Link } from "expo-router";
import { useContext } from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileContext } from "./_layout";

export default function Home() {
    const { profileData, setProfileData } = useContext(ProfileContext);

    return (
        <SafeAreaView style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            gap: 15,
        }}>
            <Text style={{
                borderColor: "black",
                borderWidth: 2,
                padding: 8
            }}>
                Welcome, {profileData.name}</Text>
            <Text style={{
                borderColor: "black",
                borderWidth: 2,
                padding: 8
            }}>Email: {profileData.email}</Text>
            <Text>{profileData.newsLetterToggle ? "You are subscribed to the newsletter" : "You are not subscribed to the newsletter"}</Text>
            <Link href="/(modals)/about" asChild>
                <Button title="About"/>
            </Link>
        </SafeAreaView>
    )
}