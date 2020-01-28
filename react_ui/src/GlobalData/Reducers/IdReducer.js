const idValue = (state = 0, action) => {
  switch (action.type) {
    case "GET_ID":
      return state + 1;

    default:
      return state;
  }
};

export default idValue;
