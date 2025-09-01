import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default function App() {
  const [V1, setValor1] = useState('');
  const [V2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const somar = () => setResultado(Number(V1) + Number(V2));
  const subtrair = () => setResultado(Number(V1) - Number(V2));
  const multiplicar = () => setResultado(Number(V1) * Number(V2));
  const dividir = () => {
    if (Number(V2) === 0) {
      setResultado('Erro: divisão por 0');
    } else {
      setResultado(Number(V1) / Number(V2));
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={require('./assets/f.png')} style={styles.fundo} />

      <Text style={styles.titulo}></Text>

      <TextInput
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setValor1}
        value={V1}
      />
      <TextInput
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setValor2}
        value={V2}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={somar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={subtrair}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={multiplicar}>
          <Text style={styles.textoBotao}>X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={dividir}>
          <Text style={styles.textoBotao}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultadoBox}>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#add8e6',
  },
  fundo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 150,
    color: '#000',
  },
  input: {
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 50,
    marginBottom: 10,
    padding: 10,
    textAlign: 'center',
  },
  botoes: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    width: '80%'
  },
  botao: {
  marginTop: 10,
  backgroundColor: '#e6f0ff',
  width:60,
  height: 60,
  borderRadius: 10,
  borderWidth:2,
  borderColor: "#33589cff",
  alignItems: 'center',
  justifyContent:'center'
  },
  textoBotao: {
    fontSize: 16,
    color: '#33589cff',
    fontWeight: 700
  },
  resultadoBox: {
    marginTop: 150,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
