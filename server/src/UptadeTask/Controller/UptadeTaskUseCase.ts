import {RegexService} from "../../Services/RegexService";

const valueTitulo = (titulo: string) => {
  if (RegexService.checkWritingEmpty.test(titulo)) {
    return titulo;
  } else {
    return undefined;
  }
};

const valueConcluida = (concluida: boolean) => {
  if (concluida != undefined) {
    return concluida;
  } else {
    return undefined;
  }
};

export const UptadeTaskUseCase = {valueTitulo, valueConcluida};
