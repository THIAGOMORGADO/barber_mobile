/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Image, Keyboard, Text, TouchableWithoutFeedback, View, KeyboardAvoidingView } from "react-native";
import { Feather } from '@expo/vector-icons'
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';


import Logo from '@/assets/Logo.png'
import Inputs from "@/components/Input";
import Button from "@/components/Button";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Add this import
import { Title } from '@/components/Title';
import useUserStorage from '@/context/useUserStorage';

type RootStackParamList = {
    finished: undefined; // Define your route types here
    // ... other routes
};

export default function Account() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [loading, setLoading] = useState(true);
    const { user, saveUser, loadUser, clearUser } = useUserStorage();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          fristName: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
  
    })
    const schema = yup.object().shape({
        fristName: yup.string().required('First name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 8 characters').required('Password is required'),
    });
    const onSubmit = (data: any) => {
        schema.validate(data).then(() => {
        try {
            const { name, email, password } = data;
            saveUser(name, email, password)
            console.log(user);
            navigation.navigate('SignIn' as keyof RootStackParamList); 
        if (data.password === data.confirmPassword) {
            console.log("Login successful");
            navigation.navigate('finished' as keyof RootStackParamList); // Cast to the correct type
        } else {
            console.error("Password and Confirm Password do not match");
        }
        } catch (error) {
            console.error("Login failed", error);

        }
        }).catch((error: any) => {
            console.error(error);
        });
    }
   
 

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

        <View className="bg-[#312E38] flex-1 items-center justify-center">
        <KeyboardAvoidingView behavior="padding" style={{ marginBottom: 40}} className="w-[70%]">
            <View className="items-center">
                <Image source={Logo} className='w-[150px] h-[90px] mb-10'/>
                <Title className="text-white font-Medium text-[20px] mb-5"  title='Crie sua conta'/>
            </View>
            
            
                <View className="flex-row  flex gap-2 w-full bg-[#232129] mb-2 rounded-lg">
                <Controller
                        
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <Inputs 
                            iconName="user" 
                            IconColor="#666360" 
                            size={20} 
                            placeholder="Nome" 
                            placeholderTextColor="#666360"
                            className={`font-Regular text-base text-white w-[100%]`}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                              autoCapitalize="none"
                              keyboardAppearance="dark"
                        />
                    )}
                        name="fristName"
                    />
                   
                </View>
                {errors.fristName && <Text className="text-Orange px-2 font-500 text-base">Isso é obrigatório.</Text>}

                    <View className=" flex-row  flex gap-2 w-full bg-[#232129] mb-2 rounded-lg">
                        <Controller
                                control={control}
                                rules={{
                                required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                <Inputs 
                                    iconName="mail" 
                                    IconColor="#666360" 
                                    size={20} 
                                    placeholder="E-mail" 
                                    placeholderTextColor="#666360"
                                    className={`font-Regular text-base text-white w-[100%]`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                      autoCapitalize="none"
                                      keyboardAppearance="dark"
                                />
                            )}
                                name="email"
                            />
                        </View>
                        {errors.email && <Text className="text-Orange px-2 font-500 text-base">Isso é obrigatório.</Text>}

                    <View className="flex flex-row gap-2 w-full bg-[#232129] mb-2 rounded-lg">
                        <Controller 
                             control={control}
                             rules={{
                             required: true,
                             maxLength: 8
                             }}
                             render={({ field: { onChange, onBlur, value } }) => (
                                <Inputs 
                                iconName="lock" 
                                size={20} 
                                placeholder="Senha" 
                                secureTextEntry
                                placeholderTextColor="#666360" 
                                className="font-Regular text-base text-white" 
                                IconColor="#666360"  
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                  autoCapitalize="none"
                                  keyboardAppearance="dark"
                            />
                         )}
                             name="password"
                         />
                       
                    </View>
                    {errors.password && <Text className="text-Orange px-2 font-500 text-base">Isso é obrigatório.</Text>}
                    <View className="flex flex-row gap-2 w-full bg-[#232129] mb-2 rounded-lg">
                        <Controller 
                             control={control}
                             rules={{
                             required: true,
                             maxLength: 8
                             }}
                             render={({ field: { onChange, onBlur, value } }) => (
                                <Inputs 
                                iconName="lock" 
                                size={20} 
                                secureTextEntry
                                placeholder="Confirme a senha" 
                                placeholderTextColor="#666360" 
                                className="font-Regular text-base text-white" 
                                IconColor="#666360"  
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                  autoCapitalize="none"
                                  keyboardAppearance="dark"
                            />
                         )}
                             name="confirmPassword"
                         />
                       
                    </View>
                    {errors.confirmPassword && <Text className="text-Orange px-2 font-Medium text-sm mb-5">Isso é obrigatório.</Text>}

                    <Button className="bg-Orange items-center justify-center flex-col p-2 rounded-lg font-500 text-base" title="Cadastra-se" onPress={() => { setLoading(true); handleSubmit(onSubmit)(); setLoading(false); }}/>
            </KeyboardAvoidingView>
        
           
            <View className=" w-full h-20 absolute  flex-row bottom-0   items-center justify-center gap-4"> 
                    <Button title="Voltar para o login" className="font-Regular text-sm text-white flex-row items-center gap-4 " onPress={navigation.goBack}>
                       <Feather name='arrow-left' size={20} color={'#fff'} />
                    </Button>
            </View>

        </View>
            
        </TouchableWithoutFeedback>
    )
}