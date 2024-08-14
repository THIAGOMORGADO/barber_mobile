/* eslint-disable react/react-in-jsx-scope */
import finished from '@/screens/finished'
import Account from '@/screens/NewAccounts'



import SignIn from '@/screens/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stacks = createNativeStackNavigator()


export default function MainStack() {
    return(
        <Stacks.Navigator
                   
            initialRouteName='SignIn'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stacks.Screen options={{
                
            }} name='SignIn' component={SignIn} />
            <Stacks.Screen name='Accounts' component={Account} />
            <Stacks.Screen name='finished' component={finished} />
        </Stacks.Navigator>

    )
}