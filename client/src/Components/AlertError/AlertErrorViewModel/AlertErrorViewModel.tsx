import {Alert} from 'react-native';

export const AlertErrorViewModel: () => void = () => {
  return Alert.alert(
    'Erro!',
    `Por favor, verifique a conexção de internet e tente novamente.${'\n'}Ou tente novamente mais tarde.`,
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'Ver tarefas', onPress: () => {}},
    ],
  );
};
