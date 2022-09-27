import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  
   title: {
    color: '#4B0082',
    fontSize: 30,
    margin: 10,
    fontWeight: '500',
    textAlign: 'center',
  },

  input: {
    borderColor: '#4B0082',
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 1.5,
    marginTop: 20,
    color: 'grey'
  },

    textoSlider: {
    color: '#4B0082',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

    subTitulo: {
    color: 'grey',
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 8,
    textAlign: 'left',
  },

  botao: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#4B0082',
    margin: 10
  },

    textoBotao: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center'
  },
  
   perfil: {
    margin: 10,
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: '#4B0082',
  },

  posicaoSwitch: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  
});

export {styles}
 