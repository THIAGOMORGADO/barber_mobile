/* eslint-disable react/react-in-jsx-scope */
import Appointment from '@/screens/AuthScreens/Appointment'
import Home from '@/screens/AuthScreens/Home'
import Profile from '@/screens/AuthScreens/Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stacks = createNativeStackNavigator()


export default function AuthRoutes() {
    return(
        <Stacks.Navigator
             screenOptions={{
                headerShown: false,
            }}
        >
            <Stacks.Screen name='Home' component={Home} />
            <Stacks.Screen name='Appointment' component={Appointment} />
            <Stacks.Screen name='Profile' component={Profile} />
        </Stacks.Navigator>
    )
}