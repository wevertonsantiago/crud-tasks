import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Switch,
} from 'react-native';
import React from 'react';
import {ButtomCustomViewModel} from '../../Components/ButtomCustom/ButtomCustomViewModel/ButtomCustomViewModel';
import {Colors} from '../../Styles/colors';
import {IEditTaskModel} from '../Model/EditTaskModel';

export const EditTaskViewModel: React.FC<IEditTaskModel> = ({
  handleOnPress,
  inputFocusEdit,
  isDisable,
  isLoading,
  setInputFocusEdit,
  setTextTaskEdit,
  textButton,
  textTaskEdit,
  titleNewTaskEdit,
  setConluidaItem,
  concluidaItem,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.container}
          onPress={Keyboard.dismiss}
          activeOpacity={1}>
          <Text style={styles.textDescription}>{titleNewTaskEdit}</Text>
          <TextInput
            multiline
            numberOfLines={2}
            maxLength={60}
            onFocus={() => setInputFocusEdit(true)}
            onBlur={() => setInputFocusEdit(false)}
            onChangeText={text => setTextTaskEdit(text)}
            value={textTaskEdit}
            style={stylesCustom(inputFocusEdit).input}
          />
          <View style={stylesIcon(concluidaItem).card}>
            <View style={styles.space} />
            <Text style={styles.textCard}>
              {concluidaItem ? 'Concluida' : 'Não Concluida'}
            </Text>
            <View style={styles.buttonIcone}>
              <Switch
                trackColor={{false: Colors.disable, true: Colors.blue}}
                thumbColor={
                  concluidaItem
                    ? Colors.cardTaskConcluido
                    : Colors.cardTaskNaoConcluido
                }
                ios_backgroundColor={Colors.disable}
                onValueChange={() => setConluidaItem(!concluidaItem)}
                value={concluidaItem}
              />
            </View>
          </View>
          <View style={styles.buttom}>
            <ButtomCustomViewModel
              handleOnPress={handleOnPress}
              isDisable={isDisable}
              isLoading={isLoading}
              textButton={textButton}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  textDescription: {
    color: Colors.textBlack,
    fontSize: 18,
    marginVertical: 8,
  },
  buttom: {
    marginTop: 32,
  },
  buttonIcone: {
    backgroundColor: Colors.backgroundColor,
    height: 42,
    width: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    height: 28,
    width: 28,
  },
  textCard: {
    fontSize: 22,
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
});

const stylesCustom = (inputFocusEdit: boolean) =>
  StyleSheet.create({
    input: {
      paddingHorizontal: 8,
      borderWidth: inputFocusEdit ? 3 : 2,
      borderColor: inputFocusEdit ? Colors.blue : Colors.disable,
      color: Colors.textBlack,
      fontSize: 18,
      borderRadius: 16,
    },
  });
const stylesIcon = (concluidaItem: boolean) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 32,
      backgroundColor: concluidaItem
        ? Colors.cardTaskConcluido
        : Colors.cardTaskNaoConcluido,
      height: 60,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
  });
