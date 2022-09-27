import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './styles'
 
class Vaga extends Component{
    render(){
      return(
        <View style={styles.areaVaga}>
          <Text style={styles.nomeVaga}>{this.props.data.vaga}</Text>
          <Text style={styles.textoVaga}>Salário: {this.props.data.salario} </Text>
          <Text style={styles.textoVaga}>Descrição: {this.props.data.descricao} </Text>
          <Text style={styles.contatoVaga}>Contato: {this.props.data.contato} </Text>
        </View>
      );
    }
  }
 
export default Vaga;
