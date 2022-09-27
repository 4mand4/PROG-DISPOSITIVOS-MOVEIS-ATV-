import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b7d5ac',
  },

  input:{
    height: 45,
    width: 200,
    borderWidth: 1,
    borderColor: '#eee',
    margin: 10,
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8

  },

  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    margin: 20,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  botao: {
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: '#ce574b',
    borderRadius: 8
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    color: 'white',
    fontWeight: '900',
    letterSpacing: 1.5,
  }
});

export {styles}
 