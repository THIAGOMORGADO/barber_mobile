import React from 'react';
import {Image, Text, TouchableOpacity, View } from "react-native";

import {Feather} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

interface HeaderActionProps {
  title: string;
  
  onPress?: () => void;
  mode: boolean;
}

export default function HeaderAction ({ title, onPress, mode }: HeaderActionProps) {
    const navigation = useNavigation()
  return (
    <View className=' bg-background'>
        <View className={`w-full h-[132px] flex-row items-center justify-between px-6 py-7 mt-5`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
        <Text className="text-white text-xl font-Medium font-bold">{title}</Text>
        <View>
          {mode ?  <TouchableOpacity onPress={onPress}>
                <Feather name='power' size={24} color="#fff"/>
            </TouchableOpacity> : 
            
            
                <Image source={{
                    uri: 'https://avatars.githubusercontent.com/u/27393649?v=4'
                    }} className='w-[40px] h-[40px] rounded-full' 
                />
            

          }
           
        </View>
    </View>
    </View>
    
  );
};