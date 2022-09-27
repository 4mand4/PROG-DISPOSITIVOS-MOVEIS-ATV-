import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

   container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  title: {
    marginTop: 50,
    marginBottom: 5,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '500',
  },
  
    nome: {
    marginTop: 15,
    paddingLeft: 15,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '300'
  },

    valor: {
    fontSize: 30,
    paddingLeft: 15,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'left',
    fontWeight: '400',
  },

  box:{
    backgroundColor: 'white',
    width: 250,
    height: 500,
    margin: 20,
    marginBottom: 10,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  
  imagem: {
    width: null,
    height: null,
    flex: 1,

  },



});

export {styles}