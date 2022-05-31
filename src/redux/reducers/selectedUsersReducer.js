//reducer for selected users count
  const selectedUsersReducer = (selectedUsersState=0, action) => {
    switch (action.type) {
      case "INCREMENT_SELECTED":
        return selectedUsersState+1     
      case "DECREMENT_SELECTED":
        return selectedUsersState-1
      default:
        return selectedUsersState
    }
  };
  
  export default selectedUsersReducer;