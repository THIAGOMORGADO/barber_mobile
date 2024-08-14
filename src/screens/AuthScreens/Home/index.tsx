import {Header} from '@/components/Header';
import { Title } from '@/components/Title';
import React from 'react';
import { View } from "react-native";

import List from '@/components/List'; // Ensure this import is correct

export default function Home() {
   
    return(
    
           <View className='bg-background h-screen' >
                <Header />

                <View className='px-6 '>
                    <Title title='Cabeleleiros' className='font-Medium text-2xl text-white'/>
                </View>
        
                <List />
            
            
             
           
           </View>
    )
}