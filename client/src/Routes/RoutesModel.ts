import {DrawerActionType} from '@react-navigation/native';

export type IRootStackParamList = {
  dispatch(arg0: DrawerActionType): unknown;
  toggleDrawer(): void;
  closeDrawer(): void;
  openDrawer(): void;
  goBack(): void;
  navigate: (screen: string) => void;
  reset(arg0: {index: number; routes: {name: string}[]}): void;
  ListTaskView: {name: string};
  CreateTaskView: {name: string};
  EditTaskView: {name: string};
};
