import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [senhaNormal, setSenhaNormal] = useState(0);
  const [senhaPrioritaria, setSenhaPrioritaria] = useState(0);
  const [senhaAltaPrioridade, setSenhaAltaPrioridade] = useState(0);
  
  const gerarSenha = (tipo) => {
    if (tipo === 'N') {
      setSenhaNormal((prev) => prev + 1);
    } else if (tipo === 'P') {
      setSenhaPrioritaria((prev) => prev + 1);
    } else if (tipo === 'AP') {
      setSenhaAltaPrioridade((prev) => prev + 1);
    }
  };
  
  const formatarSenha = (tipo, numero) => {
    if (tipo === 'AP') {
      return `AP0${numero.toString().padStart(2, '0')}`;
    }
    return `${tipo}0${numero.toString().padStart(2, '0')}`;
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Gerador de Senhas</Text>
      
      <TouchableOpacity onPress={() => gerarSenha('N')} style={styles.button}>
        <Text style={styles.buttonText}>Normal</Text>
      </TouchableOpacity>
      <Text style={styles.senha}>{formatarSenha('N', senhaNormal)}</Text>
      
      <TouchableOpacity onPress={() => gerarSenha('P')} style={styles.button}>
        <Text style={styles.buttonText}>Prioritário</Text>
      </TouchableOpacity>
      <Text style={styles.senha}>{formatarSenha('P', senhaPrioritaria)}</Text>
      
      <TouchableOpacity onPress={() => gerarSenha('AP')} style={styles.button}>
        <Text style={styles.buttonText}>Alta Prioridade</Text>
      </TouchableOpacity>
      <Text style={styles.senha}>{formatarSenha('AP', senhaAltaPrioridade)}</Text>
    </View>
  );
}

const styles = {
  button: {
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
    width: 100,
    margin: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  senha: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
};
