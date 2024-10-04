import { View } from "react-native";
import BotomSaude from "../../components/saude/botaoSaude";
import Calendar from "../../components/saude/calendarioSaude";

export default function Saude() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#d7d7d7",
                
            }} 
            
        >
            <View>
                <Calendar/>
                <BotomSaude titulo={"previsao"} rota={"Previsao"}/>
                <BotomSaude titulo={"doentes"} rota={"Doentes"}/>
            </View>
        </View>    
    )
}