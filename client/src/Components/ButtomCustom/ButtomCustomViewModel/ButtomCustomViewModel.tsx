import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../Styles/colors';
import {IButtomCustomModel} from '../ButtomCustomModel/ButtomCustomModel';

export const ButtomCustomViewModel: React.FC<IButtomCustomModel> = ({
  isDisable,
  isLoading,
  textButton,
  handleOnPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={stylesButtom(isDisable).containerButtonOnPress}
        onPress={() => handleOnPress()}
        disabled={!isDisable}>
        {!isLoading && <Text style={styles.textButton}>{textButton}</Text>}
        {isLoading && <ActivityIndicator size={32} color={Colors.textWhite} />}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  containerViewButtom: {
    justifyContent: 'center',
    marginVertical: 20,
  },
  textButton: {
    color: Colors.textWhite,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
const stylesButtom = (isDisable: boolean) =>
  StyleSheet.create({
    containerButtonOnPress: {
      height: 56,
      backgroundColor: isDisable ? Colors.blue : Colors.disable,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
    },
  });
