import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IHeaderModel} from '../HeaderModel/HeaderModel';
import moment from 'moment';
import 'moment/locale/pt-br';
import {Colors} from '../../../Styles/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Spacing} from '../../../Styles/spacing';
import {useNavigation} from '@react-navigation/native';
import {IRootStackParamList} from '../../../Routes/RoutesModel';

export const HeaderViewModel: React.FC<IHeaderModel> = ({
  text,
  isDate,
  isBackArrow,
}) => {
  const navigation = useNavigation<IRootStackParamList>();
  const sizeArrowIcone = 26;
  const horizontalViewIcon = 16;
  const paddingTextRight = horizontalViewIcon * 2 + sizeArrowIcone;
  return (
    <View style={styles.container}>
      {isBackArrow && (
        <View style={styles.containerView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListTaskView')}
            style={styles.touchOnPress}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.textWhite}
              size={sizeArrowIcone}
            />
          </TouchableOpacity>
          <View
            style={stylesCustom(paddingTextRight).containerTextViewBackArrow}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      )}
      {!isBackArrow && (
        <View style={styles.containerTextView}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
      {isDate && (
        <Text style={styles.date}>{moment().format('DD/MM/YYYY')}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Spacing.deviceWidth,
  },
  containerTextViewBackArrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 58,
  },
  containerTextView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.textWhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    color: Colors.textWhite,
    fontSize: 14,
  },
  touchOnPress: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

const stylesCustom = (paddingTextRight: number) =>
  StyleSheet.create({
    containerTextViewBackArrow: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: paddingTextRight,
    },
  });
