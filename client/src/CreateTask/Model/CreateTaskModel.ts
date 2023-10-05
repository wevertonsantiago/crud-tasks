export interface ICreateTaskModel {
  titleNewTask: string;
  textTaskCreate: string;
  setTextTaskCreate: React.Dispatch<React.SetStateAction<string>>;
  inputFocusCreate: boolean;
  setInputFocusCreate: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnPress: () => void;
  isDisable: boolean;
  isLoading: boolean;
  textButton: string;
}
