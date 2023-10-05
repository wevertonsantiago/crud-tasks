import moment from "moment";

const dateNow = new Date();

const dateCreatedNow = () => {
  return moment(dateNow).format("YYYY-MM-DDTHH:mm:ss[Z]");
};

export const DateTimeService = {dateCreatedNow};
