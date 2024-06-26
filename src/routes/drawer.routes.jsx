
// tela de teste

import { createDrawerNavigator } from "@react-navigation/drawer";
import {Feather} from "@expo/vector-icons";

import TabRoutes from "./tab.routes";
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){

    return(
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen
             name="Produtos"
              component={TabRoutes}
              options={{
                drawerIcon: (color, size) => <Feather name='home' color={color} size={size}/>,
                drawerLabel: 'Produtos'
              }}
            />
            <Drawer.Screen
             name="inicio"
              component={StackRoutes}
              options={{
                drawerIcon: (color, size) => <Feather name='home' color={color} size={size}/>,
                drawerLabel: 'Aluno'
              }}
            />
        </Drawer.Navigator>
    )
}