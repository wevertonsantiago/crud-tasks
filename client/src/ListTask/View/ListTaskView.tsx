import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import {ContextAPI} from '../../ContextsApi/ContextProver';
import {HeaderViewModel} from '../../Components/Header/HeaderViewModel/HeaderViewModel';
import {useNavigation} from '@react-navigation/native';
import {IRootStackParamList} from '../../Routes/RoutesModel';
import {ListTaskCardViewModel} from '../ViewModel/ListTaskCardViewModel';
import {ListTaskBottomTabViewModel} from '../ViewModel/ListTaskBottomTabViewModel';
import {Spacing} from '../../Styles/spacing';

export const ListTaskView: React.FC = () => {
  const {
    isDelete,
    isEdit,
    setIsDelete,
    setIsEdit,
    listTasksQuery,
    page,
    setPage,
    listTasksData,
    setListTasksData,
  } = useContext(ContextAPI);
  const navigation = useNavigation<IRootStackParamList>();

  const loadApiList = async () => {
    const data = await listTasksQuery.mutateAsync();
    if (!listTasksQuery.isSuccess) {
      setListTasksData([...listTasksData, ...data]);
      setPage(page + 1);
    }
  };

  const handleDelete = () => {
    setIsDelete(!isDelete);
    setIsEdit(false);
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
    setIsDelete(false);
  };
  const handleAdd = () => {
    navigation.navigate('CreateTaskView');
    setIsEdit(false);
    setIsDelete(false);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const ListFooterComponent = () => {
    return (
      <View style={styles.footerStyle}>
        {listTasksQuery.isLoading && (
          <ActivityIndicator size={38} color={'#000'} />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderViewModel
        text="Lista de Tarefas"
        isDate={true}
        isBackArrow={false}
      />
      <FlatList
        data={listTasksData}
        ListHeaderComponent={<View style={styles.headerStyle} />}
        style={styles.flatListScrollLimit}
        keyExtractor={(_item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadApiList}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ListFooterComponent />}
        renderItem={({item}) => {
          return (
            <>
              {true && (
                <ListTaskCardViewModel
                  textTask={item?.titulo}
                  isConcluido={item?.concluida}
                  dateCreate={item?.created_at}
                  isDelete={isDelete}
                  isEdit={isEdit}
                  id={item?.id}
                />
              )}
            </>
          );
        }}
      />
      <ListTaskBottomTabViewModel
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        isDelete={isDelete}
        isEdit={isEdit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListScrollLimit: {
    height: Spacing.deviceHeight * 0.7,
  },
  headerStyle: {
    marginTop: 4,
  },
  footerStyle: {
    paddingBottom: 200,
  },
});
