import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useContext} from 'react';
import {Colors} from '../../Styles/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {IListTaskCardModel} from '../Model/ListTaskModel';
import SVGdelete from '../../Assets/delete.svg';
import SVGedit from '../../Assets/edit.svg';
import moment from 'moment';
import {useMutation} from 'react-query';
import {ApiService} from '../../Services/ApiService';
import {ContextAPI} from '../../ContextsApi/ContextProver';
import {useNavigation} from '@react-navigation/native';
import {IRootStackParamList} from '../../Routes/RoutesModel';

export const ListTaskCardViewModel: React.FC<IListTaskCardModel> = ({
  textTask,
  isConcluido,
  isDelete,
  isEdit,
  dateCreate,
  id,
}) => {
  const {
    setListTasksData,
    setPage,
    listTasksQuery,
    setIdItem,
    setTituloItem,
    setConluidaItem,
  } = useContext(ContextAPI);
  const editDeleteFalse = !isDelete && !isEdit;
  const editTrue = !isDelete && isEdit;
  const deleteTrue = isDelete && !isEdit;
  const editDeleteTrue = isDelete || isEdit;
  const naigation = useNavigation<IRootStackParamList>();
  const deleteTasksQuery = useMutation(() => ApiService.deleteTask(id));
  const handleDeleteTask = async () => {
    await deleteTasksQuery.mutateAsync();
    Alert.alert('Sucesso!', `Tarefa: ${textTask} ${'\n'}Removido.`, [
      {
        text: 'OK',
        onPress: async () => {
          setPage(1);
          // setListTasksData([]);
          const data = await listTasksQuery.mutateAsync();
          setListTasksData(data);
        },
      },
    ]);
  };
  const handleEditTask = () => {
    setIdItem(id);
    setTituloItem(textTask);
    setConluidaItem(isConcluido);
    naigation.navigate('EditTaskView');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View style={stylesDone(isConcluido).containerIcone}>
          <TouchableOpacity
            onPress={
              deleteTrue ? () => handleDeleteTask() : () => handleEditTask()
            }
            disabled={editDeleteFalse}
            style={stylesCustom(editDeleteTrue).buttonIcone}>
            {editDeleteFalse && (
              <Entypo
                name={isConcluido ? 'emoji-flirt' : 'emoji-sad'}
                size={28}
                color={Colors.textBlack}
              />
            )}
            {deleteTrue && <SVGdelete fill={Colors.backgroundColor} />}
            {editTrue && <SVGedit fill={Colors.backgroundColor} />}
          </TouchableOpacity>
        </View>
        <View style={stylesDone(isConcluido).containerViewTask}>
          <Text style={styles.textTask}>{textTask}</Text>
          <View style={styles.containerText}>
            <Text style={styles.text}>
              {isConcluido ? 'Concluido' : 'Não Concluido'}
            </Text>
            <Text style={styles.text}>
              Criado: {moment(dateCreate).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  containerRow: {
    flexDirection: 'row',
  },

  textTask: {
    color: Colors.textBlack,
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 8,
  },
  text: {
    color: Colors.textBlack,
    fontSize: 16,
    fontWeight: '500',
  },
});

const stylesCustom = (editDeleteTrue: boolean) =>
  StyleSheet.create({
    buttonIcone: {
      backgroundColor: editDeleteTrue ? Colors.blue : Colors.backgroundColor,
      height: 42,
      width: 42,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
const stylesDone = (isConcluido: boolean) =>
  StyleSheet.create({
    containerIcone: {
      backgroundColor: isConcluido
        ? Colors.cardTaskConcluido
        : Colors.cardTaskNaoConcluido,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.2,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      paddingVertical: 16,
    },
    containerViewTask: {
      backgroundColor: isConcluido
        ? Colors.cardTaskConcluido
        : Colors.cardTaskNaoConcluido,
      flex: 1,
      paddingLeft: 8,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      paddingVertical: 16,
    },
  });
