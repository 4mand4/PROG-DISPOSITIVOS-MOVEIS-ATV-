import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import {styles} from './styles';
 
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      contador: 0
    };
    
  }
    mais(){
     this.setState({
     contador: this.state.contador + 1
     });
 
  }

   menos(){
        if (this.state.contador <= 0) {
          this.state.contador = 1
        }
        this.setState({
        contador: this.state.contador - 1
        });
  }

  render(){
 
    return(
      <View style={styles.container}>
        <Text style={{color: '#ff7f00', fontSize: 25, margin: 20, textAlign: 'center', fontWeight: '500'}}>
          Contador de Pessoas
        </Text>

        <Text style={styles.texto}>
          {this.state.contador}
        </Text>

      <Pressable style={styles.botao} onPress={() => this.mais()}>
       <Text style={styles.textoBotao}>+</Text>
      </Pressable>

      <Pressable style={styles.botao2} onPress={() => this.menos()}>
       <Text style={styles.textoBotao}>-</Text>
      </Pressable>

      </View>

    )

  }
}


export default App;
