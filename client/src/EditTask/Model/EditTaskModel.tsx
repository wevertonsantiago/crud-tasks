export interface IEditTaskModel {
  titleNewTaskEdit: string;
  textTaskEdit: string;
  setTextTaskEdit: React.Dispatch<React.SetStateAction<string>>;
  inputFocusEdit: boolean;
  setInputFocusEdit: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnPress: () => void;
  isDisable: boolean;
  isLoading: boolean;
  textButton: string;
  concluidaItem: boolean;
  setConluidaItem: React.Dispatch<React.SetStateAction<boolean>>;
}
