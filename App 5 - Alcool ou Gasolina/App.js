import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this); 
  }

  calcular(){
      let n1 = this.state.input1;
      let n2 = this.state.input2;
      let res = n1/n2;

      if (res <= 0.7) {
        this.setState({resultado: 'Álcool é melhor!'});
      } else {
        this.setState({resultado: 'Gasolina é melhor!'});
      }
      
  }

  render(){
    
    let img = 'https://i.imgur.com/Xxxdvjz.png';
    return(

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

      <Text style={styles.title}> Álcool ou Gasolina </Text>
      
      <Image  
          source={{ uri: img }}
          style={{ width: 150, height: 160, margin: 10}}      
      />

      <TextInput
      style={styles.input}
      placeholder="Preço do Álcool"
      onChangeText={ (n1) => this.setState({input1: n1})}
      />

      <TextInput
      style={styles.input}
      placeholder="Preço da Gasolina"
      onChangeText={ (n2) => this.setState({input2: n2})}

      />
      
      <Pressable style={styles.botao}
      onPress={() => this.calcular()}>
        <Text style={styles.textoBotao}> Verificar </Text>
      </Pressable>


      <Text style={styles.texto}>{this.state.resultado} </Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default App;
