import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Produtos from "../screens/Home"
import Mercado from "../screens/Home/screens/mercado.jsx";
import Padaria from "../screens/Home/screens/padaria.jsx";
import Acougue from '../screens/Home/screens/acougue.jsx'
import Feira from '../screens/Home/screens/feira.jsx'
import Gas from '../screens/Home/screens/gas.jsx'
import Combustivel from '../screens/Home/screens/combustivel.jsx';
import Escola from '../screens/Home/screens/escola.jsx';
import Construcao from '../screens/Home/screens/construcao.jsx';



const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Stack.Navigator initialRouteName="produtos">
           <Stack.Screen name="produtos" component={Produtos} options={{ title: 'Produtos', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Mercado" component={Mercado} options={{ title: 'Mercado', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Padaria" component={Padaria} options={{ title: 'Padaria', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Acougue" component={Acougue} options={{ title: 'Açougue', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Feira" component={Feira} options={{ title: 'Feira', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Gas" component={Gas} options={{ title: 'Gás de Cozinha', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Combustivel" component={Combustivel} options={{ title: 'Combustivel', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Escola" component={Escola} options={{ title: 'Escola', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            <Stack.Screen name="Construcao" component={Construcao} options={{ title: 'Construção', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
        </Stack.Navigator>
    );
}
