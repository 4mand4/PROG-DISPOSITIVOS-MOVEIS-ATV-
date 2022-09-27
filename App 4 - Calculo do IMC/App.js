import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {styles} from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    };
    
    this.imc = this.imc.bind(this); 
  }

  imc(){
      let peso = this.state.input1;
      let altura = this.state.input2;
      let imc = peso/(altura * altura);

      if (imc < 18.5) {
        this.setState({resultado: 'Abaixo do Peso!'});
      } else if(imc <= 24.9) {
        this.setState({resultado: 'Peso Normal'});
      } else if(imc <= 29.9) {
        this.setState({resultado: 'Sobrepeso'});
      } else if(imc <= 34.9) {
        this.setState({resultado: 'Obesidade Grau I'});
      } else if(imc <= 39.9) {
        this.setState({resultado: 'Obesidade Grau II'});
      } else if(imc >= 40) {
        this.setState({resultado: 'Obesidade Grau III ou Mórbida! '});
      }
      
  }

  render(){
    
    let img = 'https://www.plasticadosonho.com.br/wp-content/uploads/2017/12/blog-04-o-que-e-imc.jpg';
    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

      <Text style={styles.title}> Cálculo do IMC </Text>
      
      <Image  
          source={{ uri: img }}
          style={{ width: 230, height: 180, margin: 10}}      
      />

      <TextInput
      style={styles.input}
      placeholder="Peso"
      onChangeText={ (peso) => this.setState({input1: peso})}
      />

      <TextInput
      style={styles.input}
      placeholder="Altura"
      onChangeText={ (altura) => this.setState({input2: altura})}

      />
      
      <Pressable style={styles.botao}
      onPress={() => this.imc()}>
        <Text style={styles.textoBotao}> Verificar </Text>
      </Pressable>


      <Text style={styles.texto}>{this.state.resultado} </Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default App;
