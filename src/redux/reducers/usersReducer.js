//reducer for selected users fetch and update
const usersState = {
  users: [],
};

const usersReducer = (usersState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...usersState,
        users: action.payload,
      };
    case "UPDATE_USER":
      const updatedUser = usersState.users.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, active: !curElem.active };
        }
        return curElem;
      });
      return {
        ...usersState,
        users: updatedUser,
      };

    default:
      return {
        ...usersState,
      };
  }
};

export default usersReducer;
