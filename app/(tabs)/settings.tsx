import { Button } from "@react-navigation/elements";
import { useContext } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileContext } from "./_layout";

export default function Settings () {
    const {profileData, setProfileData}  = useContext(ProfileContext);

    const toggleSwitch = () => {
        // profileData.newsLetterToggle
        setProfileData( (prev: any) => ({...prev, newsLetterToggle: !prev.newsLetterToggle}));
    }
    return (
        <SafeAreaView>
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1
            }}>

                <View style={{
                    display:"flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%"
                }}>
                    <View style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        height: 100
                    }}>
                        <Text> Enter your name</Text>                
                        <TextInput style={{
                            borderColor: "black",
                            borderWidth: 2,
                            width: "75%"
                        }} 
                        onChangeText={(text) => setProfileData({...profileData, name: text})} placeholder="Name" value={profileData.name}/>
                    </View>

                    <View style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: 100
                    }}>
                        <Text> Enter your Email</Text>                
                        <TextInput style={{
                            borderColor: "black",
                            borderWidth: 2,
                            width: "75%"
                        }} 
                        onChangeText={(text) => setProfileData({...profileData, email: text})} placeholder="Email" />
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 15
                    }}>
                        <Text>Subscribe</Text>
                        {/* <Switch value={profileData.newsLetterToggle} onValueChange={toggleSwitch}/> */}
                        <Switch value={profileData.newsLetterToggle} 
                            onValueChange={ () => setProfileData((prev: any) => ({
                                ...prev,
                                newsLetterToggle: !prev.newsLetterToggle,
                            }))

                        }/>

                    </View>
                    <Button
                    style={{
                        width: "50%",
                        height: 40
                    }}> Save</Button>
                
                </View>
            </View>
        </SafeAreaView>
    )
}