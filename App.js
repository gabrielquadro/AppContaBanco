import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard, Switch, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [limite, setLimite] = useState(0);
  const [genero, setGenero] = useState('Masculino');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [nome, setNome] = useState('vazio');
  const [idade, setIdade] = useState(0);

  function mostrar(){
    alert('Nome: ' + nome +
     "\nIdade: " + idade +
     "\nSexo: " + genero + 
     "\nEstudante" + (isEnabled ? "Sim" : "Não") +
     "\nLimite: " + limite.toFixed(0)
     );
  }

  return (
    <Pressable 
    style={styles.container}
    onPress={Keyboard.dismiss}
    >
      <Text style={styles.titulo}>Cadastro de conta</Text>
      <Pressable style={styles.card} onPress={Keyboard.dismiss}>
        <Text style={styles.texto}>
          Nome
        </Text>
        <TextInput
        style={styles.imput}
        placeholder='Digite seu nome'
        onChangeText={setNome}
        >
        </TextInput>

        <Text style={styles.texto}>
          Idade
        </Text>
        <TextInput
        keyboardType='numeric'
        style={styles.imput}
        placeholder='Digite sua idade'
        onChangeText={setIdade}
        >
        </TextInput>


        <Text style={styles.texto}>
          Sexo
        </Text>
        <Picker
        style={{ width:150}}
          selectedValue={genero}
          onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="fFeminino" />
          <Picker.Item label="Outro" value="Outro" />
        </Picker>

        <View style={{flexDirection:'row', marginBottom: 10}}>
          <Text style={styles.texto}>
            Estudante
          </Text>
          <Switch 
            style={{marginLeft: 20}}
            onValueChange={toggleSwitch}
            value={isEnabled}
          >

          </Switch>
        </View>

        <Text style={styles.texto}>
          Limite: {limite.toFixed(0)}
        </Text>
        <Slider
        style={styles.slideLimite}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor='white'
        value={limite}
        onValueChange={(valor) => setLimite(valor)}
        minimumTrackTintColor='#80588E'
        >
        </Slider>

        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.botao}
            onPress={mostrar}
          >
            <Text>Abir Conta</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#612F72',
  },
  titulo: {
    marginTop: 50,
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  },
  card: {
    flex: 1,
    margin: 30,
    backgroundColor: '#704380',
    borderRadius: 45,
    padding: 10
  },
  texto:{
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
    fontSize: 15
  },
  imput: {
    marginTop: 10,
    borderWidth:1,
    padding: 10,
    height:40,
    padding: 10,
    //backgroundColor: 'white',
    borderRadius: 15
  }, 
  slideLimite: {
    marginTop: 10
  },
  btnArea: {
    marginTop: 40,
    alignItems: "center",
  },
  botao: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10, 
    height:40,
    width:250,
    borderRadius: 45
  }

});
