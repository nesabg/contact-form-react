export const validation = (type, value, errMessage) => {
  //Return value when we have validation error
  const defaultValueForError = {
    err: true,
    message: errMessage,
  };
  //Return value when we have no validation error
  const defaultValueForNoError = {
    err: false,
    message: null,
  };

  //Check different validation according the type of field. We pass type, current value and error message
  switch (type) {
    case "Email":
      if (
        value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        return defaultValueForNoError;
      }
      return defaultValueForError;

    case "Password":
      if (value.length > 5 && value.length < 17) {
        return defaultValueForNoError;
      }
      return defaultValueForError;
    case "Name":
      if (value.length > 3 && value.length < 20) {
        return defaultValueForNoError;
      }
      return defaultValueForError;
    case "Message":
      if (value.length > 32 && value.length < 2000) {
        return defaultValueForNoError;
      }
      return defaultValueForError;
    case "Phone":
      if (value.startsWith("359")) {
        return defaultValueForNoError;
      }
      return defaultValueForError;
  }
};
