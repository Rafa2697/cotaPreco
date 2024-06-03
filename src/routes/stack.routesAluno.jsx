import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login'
import Start from '../screens/Inicio'
import Cadastro from '../screens/Cadastro'
import Aluno from '../screens/aluno'
import Coordenador from '../screens/Coordenador'





const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Start" component={Start} options={{ title: 'Inicio', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            
            <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="Aluno" component={Aluno} options={{ title: 'Aluno', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
           
        </Stack.Navigator>
    );
}