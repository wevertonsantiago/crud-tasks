import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../Styles/colors';
import {IListTaskBottomTabModel} from '../Model/ListTaskModel';
import SVGtabMiddle from '../../Assets/tabMiddle.svg';
import SVGtabMiddleLeft from '../../Assets/tabMiddleGradientLeft.svg';
import SVGtabMiddleRigth from '../../Assets/tabMiddleGradientRigth.svg';
import SVGtabLeft from '../../Assets/tapLeft.svg';
import SVGtabLeftOff from '../../Assets/tapLeftOff.svg';
import SVGtabRigth from '../../Assets/tapRight.svg';
import SVGtabRigthOff from '../../Assets/tapRightOff.svg';
import SVGadd from '../../Assets/tabAdd.svg';

export const ListTaskBottomTabViewModel: React.FC<IListTaskBottomTabModel> = ({
  isDelete,
  isEdit,
  handleDelete,
  handleEdit,
  handleAdd,
}) => {
  const editDeleteFalse = !isDelete && !isEdit;
  const editTrue = !isDelete && isEdit;
  const deleteTrue = isDelete && !isEdit;
  return (
    <View style={styles.container}>
      <View style={styles.constainerTabBottom}>
        <TouchableOpacity onPress={handleAdd} style={styles.tabBottomAdd}>
          <SVGadd />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} activeOpacity={0.85}>
          {(editDeleteFalse || editTrue) && <SVGtabLeft />}
          {deleteTrue && <SVGtabLeftOff />}
        </TouchableOpacity>
        <View style={styles.tabMiddle}>
          {editDeleteFalse && <SVGtabMiddle />}
          {deleteTrue && <SVGtabMiddleLeft />}
          {editTrue && <SVGtabMiddleRigth />}
        </View>
        <TouchableOpacity onPress={handleEdit} activeOpacity={0.85}>
          {(editDeleteFalse || deleteTrue) && <SVGtabRigth />}
          {editTrue && <SVGtabRigthOff />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  constainerTabBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 16,
    flexDirection: 'row',
  },
  tabBottomAdd: {
    position: 'absolute',
    paddingBottom: 16,
  },
  tabMiddle: {
    paddingBottom: 0.1,
  },
});
