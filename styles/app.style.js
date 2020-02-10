import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
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
    padding: 10
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white'
  },
  buttons: {
    textAlign: 'center',
    marginTop: 10,
    padding: 5,
    lineHeight: 40,
    width: 100,
    borderWidth: 1.5,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#4286f4',
    marginLeft: 100
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  }
});

export default styles
