import { View, Text } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { style } from "./styles";
import { Step } from "../step";

export function Steps() {
    return (
        <View style={style.container}>
            <Step 
                title="Encontre o estabelecimento" 
                description="Veja locais perto de você que são parceiros Nearby"
                icon={IconMapPin}
            />
            <Step 
                title="Ative o cupom com QR Code" 
                description="Escaneie o código no estabelecimento para usar o benefício"
                icon={IconQrcode}
            />
            <Step 
                title="Garanta as vantagens perto de você" 
                description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
                icon={IconTicket}
            />
        </View>
    )
}