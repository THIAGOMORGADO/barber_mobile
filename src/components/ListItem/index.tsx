/* eslint-disable react/react-in-jsx-scope */

import { Text, View, Image, TouchableOpacity } from "react-native"; // Add Image import
import {Feather} from '@expo/vector-icons'
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Define the route types
type RootStackParamList = {
  Appointment: undefined;
};

interface ListItemProps {
  item: {
    photo: string;
    doctor: string;
    date: string;
    time: string;
  };
}

export default function List ({item} : ListItemProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    function handleAppointment() {
        navigation.navigate('Appointment');  // Navigate to appointment details page with appointment data
    }

    return (
      <TouchableOpacity onPress={handleAppointment} activeOpacity={0.9} className="mx-6 mt-6 bg-shape h-[112px] flex justify-center rounded-lg">
        <View className="px-4 w-full flex-row items-center gap-5">
            <View className="flex-col pl-[16px] pr-[19px]">
                <Image 
                    src={item.photo}
                    style={{ width: 72, height: 72, borderRadius: 36, }} 
                /> 
            </View>
            <View className="flex-col gap-4 justify-center h-[69p] ">
                <Text className="font-Medium text-lg text-white ">{item.doctor}</Text>
                <View className="flex-row gap-[22px] items-center justify-center">

                   <Feather name="calendar" color="#FF9000" size={14}/>
                   <Text className="font-Regular text-xs text-white ">{item.date}</Text>
                   
                </View>
                <View className="flex-row gap-[22px]">
                    <Feather name="clock" color="#FF9000" size={14}/>
                    <Text className="font-Regular text-xs text-white ">{item.time}</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    )
}