import { useContext, useState } from "react";
import { Alert, Button, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileContext } from "./_layout";

export default function Settings() {
    const { profileData, setProfileData } = useContext(ProfileContext);

    //Temp storage for settings before save 
    const [tempData, setTempData] = useState(profileData)

    const handleToggle = () => {
        setTempData((prev: any) => ({
            ...prev,
            newsLetterToggle: !prev.newsLetterToggle
        }))
    }

    // Push temp data to save 
    const handleSave = () => {
        setProfileData(tempData)
        Alert.alert("Profile Saved", "Your settings have been saved")
    }

    return (
        <SafeAreaView style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        }}>
            <View style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%"
            }}>
                {/* Name Input */}
                <View style={{
                    width: "100%",
                    alignItems: "center",
                }}>
                    <Text> Enter your name</Text>
                    <TextInput style={{
                        borderColor: "black",
                        borderWidth: 2,
                        width: "75%",
                        padding: 8
                    }}
                        onChangeText={(text) => setTempData({ ...tempData, name: text })} placeholder="Name" 
                        placeholderTextColor={"grey"}
                        value={tempData.name} />
                </View>
                {/* Email Input */}
                <View style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: 100,
                }}>
                    <Text> Enter your Email</Text>
                    <TextInput style={{
                        borderColor: "black",
                        borderWidth: 2,
                        width: "75%",
                        padding: 8
                    }}
                        onChangeText={(text) => setTempData({ ...tempData, email: text })} 
                        placeholder="Email"
                        placeholderTextColor={"grey"}
                        value={tempData.email}/>
                </View>
                {/* Newsletter Toggle */}
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15
                }}>
                    <Text>Subscribe</Text>
                    <Switch value={tempData.newsLetterToggle}
                        onValueChange={handleToggle}/>
                </View>
                <Button
                    title="Save"
                    onPress={handleSave}/>
            </View >
        </SafeAreaView >
    )
}