const NameReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_NAME":
      return "werwerwr";

    default:
      return "asdf";
  }
};

export default NameReducer;
