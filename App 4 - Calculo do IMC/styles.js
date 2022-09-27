import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dac3b6',
    justifyContent: 'center',
    
  },

  input:{
    width: 150,
    height: 45,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    margin: 10,
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white'
  },

  texto:{
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginTop: 20,
    fontWeight: '900',
    letterSpacing: 1.5
  },

  botao: {
    width: 150,
    height: 50,
    margin: 20,
    backgroundColor: '#ce574b',
    borderRadius: 8,
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    color: 'white',
    fontWeight: '900',
    letterSpacing: 1.5 
  }
});

export {styles}
 