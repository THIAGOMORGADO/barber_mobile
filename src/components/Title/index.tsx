/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from "react-native";

type TitleProps = {
    title: string;
    className?: string;
    
}

export function Title({title, className}: TitleProps) {
    return(
        <View>
             <Text className={className}>{title}</Text>
        </View>
    )
}