import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
import StackRoutesA from './stack.routesAluno';
import StackRoutesC from './stack.routesCoordenador';
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
                name='Tela aluno'
                component={StackRoutesA} //rota para a tela aluno, onde o aluno vai fazer o login ou cadastro para gerenciar.
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: 'Aluno'
                }}
            />
            <Tab.Screen
                name='Tela coordenador'
                component={StackRoutesC} //rota para a tela Coordenaor, onde o coordenador faz o login
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: 'Coordenador'
                }}
            />
        </Tab.Navigator>
    )
}