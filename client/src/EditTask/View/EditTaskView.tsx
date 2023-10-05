import {StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {EditTaskViewModel} from '../ViewModel/EditTaskViewModel';
import {ContextAPI} from '../../ContextsApi/ContextProver';
import {useMutation} from 'react-query';
import {ApiService} from '../../Services/ApiService';
import {useNavigation} from '@react-navigation/native';
import {IRootStackParamList} from '../../Routes/RoutesModel';
import {AlertErrorView} from '../../Components/AlertError/AlertErrorView/AlertErrorView';
import {HeaderViewModel} from '../../Components/Header/HeaderViewModel/HeaderViewModel';

export const EditTaskView: React.FC = () => {
  const {
    setIsVisibleEditTask,
    setPage,
    setListTasksData,
    listTasksQuery,
    idItem,
    concluidaItem,
    tituloItem,
    setConluidaItem,
  } = useContext(ContextAPI);
  const navigation = useNavigation<IRootStackParamList>();
  const [textTaskEdit, setTextTaskEdit] = useState('');
  const [inputFocusEdit, setInputFocusEdit] = useState(false);

  useEffect(() => {
    setTextTaskEdit(tituloItem);
  }, [tituloItem]);

  const editTaskQuery = useMutation(() =>
    ApiService.uptadeTask(idItem, textTaskEdit, concluidaItem),
  );

  const handleEditTask = async () => {
    try {
      await editTaskQuery.mutateAsync();
      setTextTaskEdit('');
      setPage(1);
      setListTasksData([]);
      await listTasksQuery.mutateAsync();
      Alert.alert('Sucesso!', 'Tarefa alterada com sucesso!', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'Ver tarefas', onPress: () => navigation.goBack()},
      ]);
    } catch (e) {
      <AlertErrorView />;
      console.log('ERRO CREATE', e);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => setIsVisibleEditTask(false)}
      activeOpacity={1}
      style={styles.container}>
      <HeaderViewModel text="Editar Tarefa" isBackArrow={true} isDate={false} />

      <EditTaskViewModel
        handleOnPress={handleEditTask}
        inputFocusEdit={inputFocusEdit}
        setInputFocusEdit={setInputFocusEdit}
        isDisable={textTaskEdit.length > 0}
        isLoading={editTaskQuery.isLoading}
        textButton={'Alterar'}
        textTaskEdit={textTaskEdit}
        setTextTaskEdit={setTextTaskEdit}
        titleNewTaskEdit="Altere o texto da Tarefa selecionada:"
        concluidaItem={concluidaItem}
        setConluidaItem={setConluidaItem}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
