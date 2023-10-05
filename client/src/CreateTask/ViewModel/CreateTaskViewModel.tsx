import {
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Styles/colors';
import {ICreateTaskModel} from '../Model/CreateTaskModel';
import {ButtomCustomViewModel} from '../../Components/ButtomCustom/ButtomCustomViewModel/ButtomCustomViewModel';

export const CreateTaskViewModel: React.FC<ICreateTaskModel> = ({
  titleNewTask,
  textTaskCreate,
  setTextTaskCreate,
  inputFocusCreate,
  setInputFocusCreate,
  handleOnPress,
  isDisable,
  isLoading,
  textButton,
}) => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.container}
        onPress={Keyboard.dismiss}
        activeOpacity={1}>
        <Text style={styles.textDescription}>{titleNewTask}</Text>
        <TextInput
          multiline
          numberOfLines={2}
          maxLength={60}
          onFocus={() => setInputFocusCreate(true)}
          onBlur={() => setInputFocusCreate(false)}
          onChangeText={text => setTextTaskCreate(text)}
          value={textTaskCreate}
          style={stylesCustom(inputFocusCreate).input}
        />
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
const stylesCustom = (inputFocusCreate: boolean) =>
  StyleSheet.create({
    input: {
      paddingHorizontal: 8,
      borderWidth: inputFocusCreate ? 3 : 2,
      borderColor: inputFocusCreate ? Colors.blue : Colors.disable,
      color: Colors.textBlack,
      fontSize: 18,
      borderRadius: 16,
    },
  });
