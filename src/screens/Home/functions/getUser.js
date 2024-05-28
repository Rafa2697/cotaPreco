import { Alert } from "react-native";
import api from "../../../services/user+api";

export const getUser = async () => {
    await api.get('/clients')
    .then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err.response)
        if(err.response){
            // Alert.alert("erro", err.response.data)
            
        }else{

        }
    })
}