import { StyleSheet, Dimensions } from 'react-native';
import { Screen, Font, Color } from '../../../api/localization';

export { styles };

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 200
  },

  btn: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    alignSelf:'center'
  },
  buttonText: {
    margin: 100,
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    alignSelf:'center'
  },
  later: {
    fontSize: 16,
    fontFamily: Font.LIGHT,
    alignSelf:'center'
  }
});
