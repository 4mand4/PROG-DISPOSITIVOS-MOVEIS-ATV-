import React, { Component } from 'react';
import {View,Text,StyleSheet,Pressable,TextInput,Image} from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      numero: Math.floor(Math.random() * 10),
    };

    this.descobrir = this.descobrir.bind(this);
    this.palpite = this.palpite.bind(this);
  }

  descobrir() {
    this.setState({ resultado: this.state.numero });
  }

  palpite(texto) {
    if (texto < 0 || texto > 10) {
      this.setState({ resultado: 'Digite um numero entre 0  e 10' });
    } else if (texto == this.state.numero) {
      this.setState({ resultado: 'Acertou' });
    } else {
      this.setState({ resultado: 'Errou' });
    }
  }

  render() {
    let img ='https://img.freepik.com/vetores-gratis/fonte-de-vetor-3d-em-camadas-com-ponto-de-interrogacao_53876-144121.jpg?w=740&t=st=1664070697~exp=1664071297~hmac=ba68f59965726f99675cf481dd655f47e5330a43a7538ae10876a5043a657a1e';
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}> JOGO DO Nº ALEATÓRIO </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 150, height: 200, margin: 30 }}
        />

        <Text style={styles.texto2}> Pense em um Nº de 0 a 10 </Text>

        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={this.palpite}
        />

        <Text style={styles.texto}> {this.state.resultado} </Text>

        <Pressable style={styles.botao} onPress={() => this.descobrir()}>
          <Text style={styles.textoBotao}> Descobrir </Text>
        </Pressable>
      </View>
    );
  }
}

export default App;
