import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { styles } from './styles';

class App extends Component{

  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.title}>MENU</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
          <Image source={require('./imgs/comida1.jpg')} style={styles.imagem}/>
          <Text style={styles.nome}>Sanduíche de Banana e Mirtilo</Text>
          <Text style={styles.valor}>R$: 25,00</Text>
          </View>
          
          <View style={styles.box}>
          <Image source={require('./imgs/comida2.jpg')} style={styles.imagem}/>
          <Text style={styles.nome}>Hamburguer Artesanal</Text>
          <Text style={styles.valor}>R$: 30,00</Text>
          </View>
          
          <View style={styles.box}>
          <Image source={require('./imgs/comida3.jpg')} style={styles.imagem}/>
          <Text style={styles.nome}>Pizza Grande </Text>
          <Text style={styles.valor}>R$: 45,00</Text>
          </View>
          <View style={styles.box}>
          <Image source={require('./imgs/comida4.jpg')} style={styles.imagem}/>
          <Text style={styles.nome}> Bolo de Framboesa</Text>
          <Text style={styles.valor}>R$: 15,00</Text>
          </View>

          <View style={styles.box}>
          <Image source={require('./imgs/comida5.jpg')} style={styles.imagem}/>
          <Text style={styles.nome}>Panquecas com Mel</Text>
          <Text style={styles.valor}>R$: 25,00</Text>
          </View>

        </ScrollView>
      
      </View>
    )
  }
}

export default App;

