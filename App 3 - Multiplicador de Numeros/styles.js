import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82c3d8',
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
    borderRadius: 8,
  },

  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
  },

  title: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    margin: 20,
    fontWeight: '600'
  },

  botao: {
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: '#007fff',
    borderRadius: 8
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: '600',
    color: 'white'
  }
});

export {styles}
 