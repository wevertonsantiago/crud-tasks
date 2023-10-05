import {IRootStackParamList} from './RoutesModel';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}
