import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

    
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    
    textoPrincipal:{
        fontSize: 28,
        color: '#FF0000',
        fontWeight: '700'

    },

    texto: {
      color: '#FF0000', 
      fontSize: 40, 
      margin: 15, 
      textAlign: 'center',
      borderRadius: 1,
      borderWidth: 3,
      paddingVertical: 25,
      paddingHorizontal: 50,

    },

    alinhaTexto:{
        textAlign: 'center'
    },

  botao:{
    width: 150,
    height: 50,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  
    botao2:{
    width: 150,
    height: 50,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'red'
  },

  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 30,
    color: 'white',
  },
  

});
 
export {styles}