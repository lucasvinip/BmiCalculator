import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContext: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    paddingTop:20,
  },
  form: {
    width: "100%",  
    paddingTop:20,
  },
  formLabel:{
    color:'#000000',
    fontSize:18,
    paddingLeft:20
  },
  input:{
    width:'90%',
    borderRadius:50,
    backgroundColor:'#f6f6f6',
    height:40,
    margin:12,
    paddingLeft:10
  },
  buttonCalculator:{
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF0043',
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    marginRight:12,
    marginTop:30
  },
  textButtonCalculator:{
    fontSize:20,
    color:'#ffff'
  },
  errorMessage:{
    fontSize:12,
    color: 'red',
    fontWeight:'bold',
    paddingLeft:20
  },
  exhibitionResultImc:{
    width:'100%',
    height:'50%'
  },
  textResultImc: {
    marginTop: 30,
    fontSize:20,
  },
  listImc: {
    marginTop: 20,
  },
  textListImc:{
    fontSize:18,
    color:'red',
    fontWeight:'bold',
  }
});