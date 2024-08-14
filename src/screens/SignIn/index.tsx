/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import * as yup from 'yup'; // Add this import
import { Image, KeyboardAvoidingView, Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack'; // Add this import
import { RootStackParamList } from '@/types/NavigationType'; // Adjusted the import path
import { useNavigation } from '@react-navigation/native'; // Add this import




import Logo from '@/assets/Logo.png'
import Inputs from "@/components/Input";
import { Feather } from "@expo/vector-icons"
import Button from "@/components/Button";

import { useForm, Controller } from "react-hook-form"
import { Title } from '@/components/Title';
import useUserStorage from '@/context/useUserStorage';

type SignInNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>; // Define your navigation prop type

export default function SignIn() {

    const { user, saveUser, loadUser, clearUser } = useUserStorage();

    const navigation = useNavigation<SignInNavigationProp>(); // Specify the type here
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          email: "",
          password: "",
        },
      })

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 8 characters').required('Password is required'),
    });

    const onSubmit = (data: any) => {
      loadUser();
       
        schema.validate(data).then(() => {
        try {
            console.log(user, "Aqui e o user, salva o arquivo e roda de novo")
            if(user?.email === "thiago_morgado@hotmail.com" && user.password === "123456"){
                navigation.navigate('Home') //roda agora o app e tenta logar
            }
        
        } catch (error) {
            console.error("Login failed", error);
        }
        }).catch((error: any) => {
            console.error(error);
        });
    }

   

    function handleNewAccount() {
        navigation.navigate('Accounts');
    }
   
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="bg-[#312E38] flex-1 justify-center items-center">
                <KeyboardAvoidingView behavior="padding" style={{ padding: 20, marginTop: 40 }}>
                    <View className="items-center">
                        <Image source={Logo} />
                        <Title className="text-white font-Medium text-[20px]  mt-7" title='Faca seu Login'/>
                    </View>
                    <View className="">
                    <View className={`w-full bg-[#232129] flex-row items-center rounded-xl mt-6  mb-2`}>
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

                    <View className={`w-full bg-[#232129] flex-row items-center rounded-xl mt-3 mb-3`}>
                    <Controller
                        control={control}
                        rules={{
                        maxLength: 100,
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Inputs 
                                iconName="lock" 
                                IconColor="#666360" 
                                secureTextEntry
                                keyboardAppearance="dark"
                                maxLength={10}
                                size={20} 
                                placeholder="Digite sua senha" 
                                placeholderTextColor="#666360"
                                className={`font-Regular text-base text-white w-[70%]`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                        
                          
                            />
                        )}
                        name="password"
                        
                    />
                        
                    </View>
                    {errors.password && <Text className="text-Orange px-2 font-500 text-base mb-3 ">Isso é obrigatório.</Text>}
                    <Button 
                    className="bg-Orange items-center justify-center flex-col p-2 rounded-lg font-Medium text-sm" title="Entra" onPress={handleSubmit(onSubmit)}/>       
                   
                    <View className="items-center mt-6">
                        <Button className="font-Medium text-[14px] text-white" title="Esquecei minha senha" onPress={() => {}} />
                    </View>
                    </View>
                   
                </KeyboardAvoidingView>
                <View className=" w-full h-20 absolute  flex-row bottom-0 border-t-2 border-inputs items-center justify-center gap-4">
                    
                    <Button title="Criar uma conta" className="font-Regular text-2xl text-Orange flex-row items-center gap-4" onPress={handleNewAccount}>
                        <Feather name="log-in" size={20} color="#FF9000" />
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}