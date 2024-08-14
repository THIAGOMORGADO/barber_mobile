/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
import { ActivityIndicator, FlatList, View } from "react-native";
import List from "../ListItem";
import { Title } from "../Title";

export default function ListItem() {
    const appointments = [
        {
            id: '1',
            date: 'Segunda feira',
            time: "10:00 AM",
            doctor: "Dr. Smith",
            specialty: "General Medicine",
            status: "Upcoming",
            photo: "https://avatars.githubusercontent.com/u/27393649?v=4",
        },
       
       
    ];
    return(
        <View>
        <FlatList
            ListEmptyComponent={() => (
                <View className="px-5 pt-6 flex flex-col items-center">
                   {
                   appointments &&  <View className="mt-4 ">
                   <Title className="font-Medium text-white mb-4" title="Carregando Babers"/>
                   <ActivityIndicator color='#FF9000'/>
               </View>

                   }
                </View>
            )}
            data={appointments}
            renderItem={({ item }) => (
                <List item={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
        />
         
     </View>
    )
}