/* eslint-disable react/react-in-jsx-scope */

import { NavigationContainer } from '@react-navigation/native'
// import MainStack from './MainStack'
import AuthRoutes from './AuthRoutes';
import MainStack from './MainStack';



export default function Routes() {
    const  seOusuarioTiverLogado = true
    return (
        <NavigationContainer >

        {/* <AuthRoutes />  */}
        
        <MainStack />  
         
        </NavigationContainer>
    )
}