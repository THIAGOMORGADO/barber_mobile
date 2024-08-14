import { TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from "react-native"; // Import TextInputProps



interface InputProps extends TextInputProps {
    iconName: keyof typeof Feather.glyphMap; // Update type to match Feather icon names
    size: number;
    IconColor: string;
    className?: string; // Add optional className prop to allow custom styling
}


export default function Inputs({iconName, IconColor,className,  size, ...rest}: InputProps) {
    return(
      <View className="w-[80%] h-[50px] rounded-xl flex-row items-center gap-5 px-2" >
        <View className=" items-center justify-center pl-6 rounded-xl ">
            <Feather name={iconName} color={IconColor} size={size}/>
            
        </View>
        <TextInput  {...rest} className={className} />
      </View>
            
     
    )
}