/* eslint-disable react/react-in-jsx-scope */

import HeaderAction from "@/components/HeaderActions";
import { View } from "react-native";

export default function Profile() {
    return (
        <View className="h-screen w-screen bg-background">
           <HeaderAction mode={false} onPress={() => {}} title="Profile" />
        </View>
    )
}