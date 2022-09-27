import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Lista from './src/Vaga'
import {styles} from './src/Vaga/styles';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, vaga: 'Analista de TI Sênior', salario: 'Até R$5.000', descricao: 'Buscamos pessoas obstinadas pela melhoria continua com forte capacidade de integração de dados utilizando as ferramentas Zabbix, Grafana e Phyton.', contato: 'tecplus@email.com'},
        {id: 2, vaga: 'Programador Júnior', salario: 'Até R$4.000', descricao: 'Estamos contratando profissionais como Programador Junior, para atender as demandas do departamento na área de desenvolvimento e automação de rotinas de cálculo, rotinas para autoCAD e desenvolvimento de sistemas internos para produção.', contato: 'nexmux@email.com'},
        {id: 3, vaga: 'Programador de Dados', salario: 'Até R$5.000', descricao: 'Automatizar o processo de correção e melhoria de bancos de dados. \nDesenvolvimento de Algoritmos (back-end) usando dados otimizados para relatórios e alertas. \nFormatar com design apropriado (front-end) para cada público.', contato: 'novatics.tec@email.com'},
        {id: 4, vaga: 'Analista Programador Junior', salario: 'Até R$3.000', descricao: 'Estamos recebendo currículos para a contratação de programador para o Departamento de Portfolio Compliance do BNY Mellon.', contato: 'bycoders_rh@email.com'},
        {id: 5, vaga: 'Programador Mobile', salario: 'Até R$7.000', descricao: 'Buscamos talentos que topem encarar desafios, aprender, que sejam proativos, vivam tecnologia e acreditem que podemos mudar o mundo através da Educação.', contato: 'zoomcprh@email.com'},
      ],
    }
  }
 
  render(){
    return(

      <View style={styles.container}>
      <Text style={styles.title}>VAGAS</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Lista data={item}/>}
        />
      </View>
    )
  }
}
 
export default App;
