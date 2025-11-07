// import { IconSymbol } from "@/app-example/components/ui/icon-symbol";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React, { createContext, useState } from "react";

// export type ProfileData = {
//     name: string,
//     email: string,
//     newsLetterToggle: boolean
// }

// export type ProfileContextType = {
//   profileData: ProfileData;
//   setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
// };

type ProfileContextType = any 
// {
//     profileData: {
//         name: string,
//         email: string,
//         newsLetterToggle: boolean
//     },
//     setProfileData: React.Dispatch<React.SetStateAction< {
//         name: string,
//         email: string,
//         newsLetterToggle: boolean
//     }>>
// };
export const ProfileContext = createContext<ProfileContextType | null>(null);
// profileData: {
//     name: "string",
//     email: "email",
//     newsLetterToggle: true
// },

export default function TabLayout() {
    // const
    const [profileData, setProfileData] = useState(
        {
            name: "[name]",
            email: "",
            newsLetterToggle: false
        }
    ); 
    return (
        <ProfileContext.Provider value={{
            profileData,
            setProfileData,
            }}
        >
            
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                    title: "home",
                    tabBarIcon: () => <MaterialIcons size={28} name="house" color={"black"} />
                }}/>

            <Tabs.Screen 
                name="settings"
                options={{
                    title: "settings",
                    tabBarIcon: () => <MaterialIcons size={28} name="settings" color={"black"} />
                }}/>
        </Tabs>
        </ProfileContext.Provider>
    )
}
