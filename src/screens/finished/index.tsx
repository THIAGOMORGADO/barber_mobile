import { Image, Text, TouchableOpacity, View } from "react-native";

import checkIcon from '@/assets/check.png'
import { useNavigation } from "@react-navigation/native";


export default function Finished() {
    const navigation = useNavigation()
    return(
        <View className="w-screen h-screen bg-background flex items-center justify-center">
            <Image source={checkIcon} />
            <Text className="font-Medium text-3xl  text-white">Cadastramento</Text>
            <Text className="font-Medium text-3xl text-white">concluído</Text>
            <Text className="font-Medium text-sm  text-white mt-4 mb-10">Agora so fazer login !</Text>

         
          <TouchableOpacity className="w-[100px] h-[50px] bg-Orange items-center justify-center flex-col p-2 rounded-lg font-500 text-base" onPress={() => navigation.navigate('SignIn')}>
                <Text className="">OK</Text>
            </TouchableOpacity>  
          
        </View>
    )
}