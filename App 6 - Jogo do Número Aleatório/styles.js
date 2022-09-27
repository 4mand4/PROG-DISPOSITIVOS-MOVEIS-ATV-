import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#04d4bc',
    justifyContent: 'center',    
  },

  input:{
    height: 50,
    width: 220,
    borderColor: 'white',
    fontSize: 30,
    padding: 10,
    borderBottomWidth: 1.5,
    marginTop: 20
  },

  texto2:{
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  texto:{
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
    
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
    margin: 10,
  },

  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#fb76db',
    width: 150,
    height: 50,
    margin: 20,
  },

  textoBotao: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }

});

export {styles}
 