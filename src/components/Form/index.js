import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc/index.js";
import { useState } from "react";
import { styles } from "./style.js";


export default function Form(){
    
    const [heigh, setHeigh] = useState(null)
    const [weigh, setWeigh] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    
    function imcCalculator(){
        return setImc((weigh/(heigh*heigh)).toFixed(2))
    }
    
    function validationImc(){
        if(heigh != null && weigh != null){
            imcCalculator()
            setHeigh(null)
            setWeigh(null)
            setMessageImc('Seu imc é igual:')
            setTextButton('Calcular Novamente')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e altura')
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeigh}
                    value={heigh}
                    placeholder="Ex. 1.83"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeigh}
                    value={weigh}
                    placeholder="Ex. 78"
                    keyboardType="numeric"
                />
                <TouchableOpacity 
                onPress={
                    () => validationImc()}
                     style={styles.buttonCalculator}   
                    >
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                </TouchableOpacity>
            </View>
            <ResultImc
                messageResultImc={messageImc} 
                resultImc ={imc}
            />
        </View>
    );
}