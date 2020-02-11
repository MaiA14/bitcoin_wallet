import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage:{
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
},
  text: {
    color: '#ff8'
  },
  logoContainer: {
    backgroundColor: '#f9f',
    alignItems: "center",
    padding: 30,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    padding: 10,
    color: 'white'
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white'
  },
  button: {
    backgroundColor: '#ed4d6e',
    width: 110,
    height: 35,
    paddingTop: 10,
    paddingBottom: 0,
    lineHeight: 40,
    borderRadius: 5,
    borderColor: 'black',
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});

export default styles
