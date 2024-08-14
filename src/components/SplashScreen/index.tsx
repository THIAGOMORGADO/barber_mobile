import { Image, Text, View } from "react-native";

import Logo from "@/assets/Logo.png";

export default function SplashScreen() {
    return(
        <View className="bg-[#312e38] flex-1 items-center justify-center">
            <Image source={Logo} className="w-52 h-28"/>
           
        </View>
    )
}