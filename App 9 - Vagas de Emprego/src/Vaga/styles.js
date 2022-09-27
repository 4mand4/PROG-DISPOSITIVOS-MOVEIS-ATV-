import {StyleSheet} from 'react-native'
 
const styles = StyleSheet.create({
    container:{
      backgroundColor: '#20b2aa',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    margin: 10,
    marginTop: 60,
    fontWeight: '600',
  },

    areaVaga:{
      backgroundColor: 'white',
      borderRadius: 8, 
      borderColor: '#20b2aa',
      borderWidth: 1,
      padding: 15,
      marginTop: 20,
      marginHorizontal: 10,
      elevation: 3,
    },

      nomeVaga:{
      marginTop: 20,
      marginBottom: 0,
      color: '#4ca9c7',
      fontSize: 21,
      marginHorizontal: 15,
      fontWeight: '900',
      letterSpacing: 1.5 
    },


    textoVaga:{
      marginTop: 20,
      color: '#777',
      fontSize: 16,
      marginHorizontal: 15,
      textAlign: 'left',
    },

    contatoVaga: {
      marginTop: 20,
      marginBottom: 30,
      color: '#777',
      fontSize: 16,
      textAlign: 'left',
      marginHorizontal: 15

    },

  })
 
export {styles};