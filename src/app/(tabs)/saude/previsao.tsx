// previsao.tsx
import React from 'react';
import { View, Text } from 'react-native';
import CardSaude from '../../components/saude/cardSaude';

export default function Previsao() {
    return (
        <View>
            <Text>Esta é a tela de Previsão</Text>
            <CardSaude titulo={'id vaquinha'} descricao={'prenha de 3 meses'}/>
        </View>
    );
}