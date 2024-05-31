import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coordenador from '../screens/Coordenador'
import categorias from '../screens/Coordenador/categorias'
import categoriaAluno from "../screens/Coordenador/cagoriaAluno";
import categoriaCotacao from "../screens/Coordenador/categoriaCotacao";





const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Stack.Navigator >
        
            <Stack.Screen name="LoginCordenador" component={Coordenador} options={{ title: 'Coordenador', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="Categorias" component={categorias} options={{ title: 'Categorias', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaAluno" component={categoriaAluno} options={{ title: 'Lista de alunos', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A'}}/>

            <Stack.Screen name="CategoriaCotacao" component={categoriaCotacao} options={{ title: 'Cotação de produtos', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A'}}/>
           
        </Stack.Navigator>
    );
}
