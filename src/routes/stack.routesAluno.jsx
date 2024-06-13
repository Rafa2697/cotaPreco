import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login'
import Start from '../screens/Inicio'
import Cadastro from '../screens/Cadastro'
import CadastroMercadoria from '../screens/aluno/cadastrarProdutos/cadastroMercadoria.js'
import MenuAluno from '../screens/aluno/menuAluno'
//rotas de categorias do menu do aluno
import Categorias from '../screens/aluno/cotacaoProdutos'
import CategoriaMercado from '../screens/aluno/cotacaoProdutos/categorias/mercado.js'
import CategoriaPadaria from '../screens/aluno/cotacaoProdutos/categorias/padaria.js'
import CategoriaAcougue from '../screens/aluno/cotacaoProdutos/categorias/acougue.js'
import CategoriaFeira from '../screens/aluno/cotacaoProdutos/categorias/feira.js'
import CategoriaGas from '../screens/aluno/cotacaoProdutos/categorias/gasCozinha.js'
import CategoriaCombustivel from '../screens/aluno/cotacaoProdutos/categorias/combustivel.js'
import CategoriaEscola from '../screens/aluno/cotacaoProdutos/categorias/escola.js'
import CategoriaConstrucao from '../screens/aluno/cotacaoProdutos/categorias/construcao.js'

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Start" component={Start} options={{ title: 'Inicio', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="menuAluno" component={MenuAluno} options={{ title: 'Menu Aluno', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CadastroMercadoria" component={CadastroMercadoria} options={{ title: 'Tela de Cadastro', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="Categorias" component={Categorias} options={{ title: 'Categorias de Produtos', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />
            {/* rotas de categorias do menu do aluno */}
            <Stack.Screen name="CategoriaMercado" component={CategoriaMercado} options={{ title: 'Categoria Mercado', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaPadaria" component={CategoriaPadaria} options={{ title: 'Categoria Padaria', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaAcougue" component={CategoriaAcougue} options={{ title: 'Categoria Açougue', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaFeira" component={CategoriaFeira} options={{ title: 'Categoria Feira', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaGas" component={CategoriaGas} options={{ title: 'Categoria Gás de Cozinha', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaCombustivel" component={CategoriaCombustivel} options={{ title: 'Categoria Combustivel', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaEscola" component={CategoriaEscola} options={{ title: 'Categoria Escola', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />

            <Stack.Screen name="CategoriaConstrucao" component={CategoriaConstrucao} options={{ title: 'Categoria Construção', headerTitleStyle: 'bold', headerTitleAlign: 'center', headerTintColor: '#25328A' }} />


        </Stack.Navigator>
    );
}
