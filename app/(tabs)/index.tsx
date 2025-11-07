import { useContext } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileContext } from "./_layout";

export default function Home () {
    const {profileData, setProfileData}  = useContext(ProfileContext);
    
    return (
        <SafeAreaView>
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                
                <Text>Welcome, {profileData.name}</Text>
                <Text>Email: {profileData.email}</Text>
            </View>
        </SafeAreaView>
    )
}