import {View, StyleSheet, Alert} from 'react-native';
import React, {useState, useContext} from 'react';
import {CreateTaskViewModel} from '../ViewModel/CreateTaskViewModel';
import {HeaderViewModel} from '../../Components/Header/HeaderViewModel/HeaderViewModel';
import {ApiService} from '../../Services/ApiService';
import {useMutation} from 'react-query';
import {ContextAPI} from '../../ContextsApi/ContextProver';
import {useNavigation} from '@react-navigation/native';
import {IRootStackParamList} from '../../Routes/RoutesModel';
import {AlertErrorView} from '../../Components/AlertError/AlertErrorView/AlertErrorView';

export const CreateTaskView: React.FC = () => {
  const {listTasksQuery, setPage, setListTasksData} = useContext(ContextAPI);
  const navigation = useNavigation<IRootStackParamList>();
  const [textTaskCreate, setTextTaskCreate] = useState('');
  const [inputFocusCreate, setInputFocusCreate] = useState(false);

  const createTaskQuery = useMutation(() =>
    ApiService.createTask(textTaskCreate),
  );

  const handleCreateTask = async () => {
    try {
      await createTaskQuery.mutateAsync();
      setTextTaskCreate('');
      setPage(1);
      setListTasksData([]);
      await listTasksQuery.mutateAsync();
      Alert.alert('Sucesso!', 'Tarefa cadastrado com sucesso!', [
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
    <View style={styles.container}>
      <HeaderViewModel text="Criar tarefa" isBackArrow={true} isDate={false} />

      <CreateTaskViewModel
        titleNewTask="Descrição da nova tarefa:"
        textTaskCreate={textTaskCreate}
        setTextTaskCreate={setTextTaskCreate}
        setInputFocusCreate={setInputFocusCreate}
        inputFocusCreate={inputFocusCreate}
        handleOnPress={handleCreateTask}
        isDisable={textTaskCreate.length > 0}
        isLoading={createTaskQuery.isLoading}
        textButton="Criar"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
