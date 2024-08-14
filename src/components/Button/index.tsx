import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";


interface ButtonProps extends TouchableOpacityProps{
    onPress?: () => void;
    title: string;
    className: string;
    children?: React.ReactNode;
    
}


export default function Button({onPress, className, title,  children, ...rest}: ButtonProps) {
    return(
        
            <TouchableOpacity className={className} onPress={onPress} {...rest}>
                {children}
             <Text className={className}>{title}</Text>
            </TouchableOpacity>
       
            
       
       
    )
}