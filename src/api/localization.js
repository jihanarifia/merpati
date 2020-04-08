import LocalizedStrings from 'react-native-localization';
import AStorage from '@api/asyncStorage';
import { Dimensions } from 'react-native';

const strings = new LocalizedStrings({
  en: {
    //Letter A
    appName: 'Merpati',
    //Letter B
    back: 'Back',
    //Letter C
    //Letter D
    defaultLang: 'en',
    //Letter E
    //Letter F
    //Letter G
    //Letter H
    //Letter I
    //Letter J
    //Letter K
    //Letter L
    //Letter M
    //Letter N
    no: 'No',
    //Letter O
    //Letter P
    //Letter Q
    //Letter R
    //Letter S
    //Letter T
    //Letter U
    //Letter V
    //Letter X
    //Letter Y
    yes: 'Yes',
    //Letter Z
  },
  ina: {
    //Huruf A
    appName: 'Merpati',
    //Huruf B
    back: 'Back',
    //Huruf C
    //Huruf D
    defaultLang: 'en',
    //Huruf E
    //Huruf F
    //Huruf G
    //Huruf H
    //Huruf I
    //Huruf J
    //Huruf K
    //Huruf L
    //Huruf M
    //Huruf N
    no: 'No',
    //Huruf O
    //Huruf P
    //Huruf Q
    //Huruf R
    //Huruf S
    //Huruf T
    //Huruf U
    //Huruf V
    //Huruf X
    //Huruf Y
    yes: 'Yes',
    //Huruf Z
  },
},
);

AStorage.getItem('language')
  .then(res => {
    strings.setLanguage(res);
  })
  .catch(error => {
    strings.setLanguage('en');
  });

const Color = {
  PRIMARY: '#50E3C2',
  SECONDARY: '#e46425',
  INTERMEDIATE: '#a54a00',
  DARK_GREY: '#565656',
  GREY: '#D8D8D8',
  LIGHT_GREY: '#F5F5F5',
  BLACK: 'black',
  WHITE: 'white',
  GREEN: '#32BA7C',
  BLUE: '#4A90E2',
  PINK: '#EB527F',
  PURPLE: '#536CC4',
  YELLOW: '#F8C36E',
  BRIGHT_ORANGE: '#fffaf2',
  LIGHT_BLUE: '#26a9e0',
  LIGHT_GREEN: '#3FED72',
  LIGHT_ORANGE: '#F5A623',
  LIGHT_RED: '#E04059',
  DARK_GREEN: '#2FA551',
  DARK_BLUE: '#23405A',
  RED_DOFF: '#BE1E2D',
  TXT_BLUE: '#0651A9',
  TXT_ORANGE: '#E57924',
  TXT_LIGHT_GREY: '#4A4A4A',
  TXT_RED: '#9E1B25',
  TXT_ALERT_GREY: '#666666',
  TXT_GREY: '#9B9B9B',
  LANGUAGE_GREY: '#808285',
  LINE: '#D0DAE8',
  PRIVACY_RED: '#9E1B25',
  BG_GREY: '#F4F4F4',
  SKELETON: '#dedfe0',
  ICON_GREY: '#80868B',
  BG_GREY: '#EEEEEE',
};

const Screen = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  HALF_SCREEN_WIDTH: Dimensions.get('window').width / 2,
};

const Font = {
  LIGHT: 'AvenirLTStd-Roman',
  BOLD: 'AvenirLTStd-Black',
  MEDIUM: 'AvenirLTStd-Heavy',
  NEXT_DB: 'AvenirNext-DemiBold',
  NEXT_MEDIUM: 'AvenirNext-Medium',
  NEXT_BOLD: 'AvenirNext-Bold'
};

export { strings, Color, Screen, Font };
