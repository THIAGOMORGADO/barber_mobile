
import { RootStackParamList } from '@/types/NavigationType';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";

export function Header() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function handleProfile() {
    // Navigate to profile page
    navigation.navigate('Profile');
  }

  return(
    <View className=' bg-background'>
      <View className='w-full h-[132px] flex-row items-center justify-between px-6 py-7 mt-5'>
        <View>
          <Text className='font-Regular text-xl text-Gray'>Bem Vindo,</Text>
          <Text className='font-Medium text-xl text-Orange'>Thiago Morgado</Text>
        </View>

        <View>
            <TouchableOpacity onPress={handleProfile}>
                <Image source={{
                    uri: 'https://avatars.githubusercontent.com/u/27393649?v=4'
                    }} className='w-[40px] h-[40px] rounded-full' 
                />
            </TouchableOpacity>
         
        </View>
      </View>
    </View>
  )
}