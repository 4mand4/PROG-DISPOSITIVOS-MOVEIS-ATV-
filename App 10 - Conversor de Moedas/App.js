import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      valor: '',
      numero1: '',
      numero2: '',
      resultado: '',
    };
    
    this.converter = this.converter.bind(this);
  }

  converter(){
      let n1 = this.state.numero1;
      let n2 = this.state.numero2;

      if (n1 == 'Dolar' && n2 == 'Dolar') {
        this.setState({resultado: '$' + Number(this.state.valor).toFixed(2)})
      } else if (n1 == 'Dolar' && n2 == 'Real') {
        this.setState({resultado: 'R$' + (this.state.valor * 5.35).toFixed(2)})
      } else if (n1 == 'Dolar' && n2 == 'Euro') {
        this.setState({resultado: '€' + (this.state.valor * 1.04).toFixed(2)})
      
      } else if (n1 == 'Real' && n2 == 'Dolar') {
        this.setState({resultado: '$' + (this.state.valor * 0.19).toFixed(2)})
      } else if (n1 == 'Real' && n2 == 'Real') {
        this.setState({resultado: 'R$' + Number(this.state.valor).toFixed(2)})
      } else if (n1 == 'Real' && n2 == 'Euro') {
        this.setState({resultado: '€' + (this.state.valor * 0.19).toFixed(2)})


      } else if (n1 == 'Euro' && n2 == 'Dolar') {
        this.setState({resultado: '$' + (this.state.valor * 0.96).toFixed(2)})
      } else if (n1 == 'Euro' && n2 == 'Real') {
        this.setState({resultado: 'R$' + (this.state.valor * 5.15).toFixed(2)})
      } else if (n1 == 'Euro' && n2 == 'Euro') {
        this.setState({resultado: '€' + Number(this.state.valor).toFixed(2)})
      }
  }

 
  render(){
    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

      <Text style={styles.title}> CONVERSOR DE MOEDAS </Text>
      <Text style={styles.subTitle}> Dolar, Real e Euro </Text>

      <View style={styles.input}>
      <TextInput style={{paddingLeft: 10, fontSize: 16}}
      placeholder="Valor" 
      placeholderTextColor="white"
      onChangeText={ (n1) => this.setState({valor: n1})}
      />
      </View>

      <View style={styles.input}>
      <Picker style={{color:'white'}}
          selectedValue = {this.state.numero1}    
          onValueChange={ (itemValue, itemIndex) => this.setState({numero1: itemValue}) }
          >
          <Picker.Item key={0} label="De"/>
          <Picker.Item key={1} value="Dolar" label="Dolar"/>
          <Picker.Item key={2} value="Real" label="Real"/>
          <Picker.Item key={3} value="Euro" label="Euro"/>
      </Picker>
      </View>

      <View style={styles.input}>
       <Picker style={{color:'white'}}
          selectedValue = {this.state.numero2}    
          onValueChange={ (itemValue, itemIndex) => this.setState({numero2: itemValue}) }
          >
          <Picker.Item key={0} label="Para"/>
          <Picker.Item key={1} value="Dolar" label="Dolar"/>
          <Picker.Item key={2} value="Real" label="Real"/>
          <Picker.Item key={3} value="Euro" label="Euro"/>
      </Picker>
      </View>
      
      <Pressable style={styles.botao}
      onPress={() => this.converter()}>
        <Text style={styles.textoBotao}> CALCULAR </Text>
      </Pressable>


      <Text style={styles.texto}>{this.state.resultado} </Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default App;

