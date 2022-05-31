//these are the actions for selected users count
export const SelectedUserIncrementAction =() =>(dispatch)=> {
    dispatch({
      type: "INCREMENT_SELECTED"
    })
  };
  export const SelectedUserDecrementAction =() =>(dispatch)=> {
    dispatch({
      type: "DECREMENT_SELECTED"
    })
  };