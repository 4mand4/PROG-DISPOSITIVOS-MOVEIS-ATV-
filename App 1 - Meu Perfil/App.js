import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={{color: '#FFFF', fontSize: 30, margin: 15}}>
          Meu Perfil
        </Text>

      <Image
          source={{ uri: 'https://i.pinimg.com/originals/45/03/47/450347b23049826628adb86af14c3871.png'}}
          style={{ width: 100, height: 100}}

      />
      <Text style={{color: '#FFFF', fontSize: 18, margin: 10}}> Dados Pessoais: </Text>
      <Text style={{color: '#483D8B', fontSize: 15}}>Nome: Amanda</Text>
      <Text style={{color: '#483D8B', fontSize: 15, margin: 10}}>RA: 1290482022020 </Text>

      <Text style={{color: '#FFFF', fontSize: 18, margin: 10}}>Formação: </Text>
      <Text style={{color: '#483D8B', fontSize: 15, marginHorizontal: 20, textAlign: 'center'}}>Cursando Análise e Desenvolvimento de Sistemas</Text>
      
      <Text style={{color: '#FFFF', fontSize: 18, margin: 10}}>Disciplina: </Text>
      <Text style={{color: '#483D8B', fontSize: 15}}>Programação para Dispositivos Móveis</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#836fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
