import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();
import StackRoutes from './stack.routes';
import StackRoutes2  from "./stack.routes2";

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='Home'
                component={StackRoutes2} //rota para a tela home, onde fica o catalogo de produtos
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='Inicio'
                component={StackRoutes} //rota para a tela aluno, onde o aluno vai fazer o login ou cadastro para gerenciar.
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: 'Aluno'
                }}
            />
        </Tab.Navigator>
    )
}