import axios from "axios";
//these are the actions for api requests

export const FetchUsersAction = () => async (dispatch) => {
  await axios
    .get("https://andreas.users.challenge.dev.monospacelabs.com/users")
    .then((response) =>{
      dispatch({
        type: "FETCH_USERS",
        payload: response.data,
      })
      console.log(response)
    }
    );
};

export const UpdateUserAction =(active,email,name,phone,type,id) => async (dispatch) => {
    await axios
      .put(`https://andreas.users.challenge.dev.monospacelabs.com/users/${id}`, {
        body: JSON.stringify({
          active: !active,
          email: `${email}`,
          name: `${name}`,
          phone: `${phone}`,
          type: `${type}`,         
        }),
        headers: {
          "Content-type": "application/json",
          "accept": "application/json"
        },
      })
      .then((response) => {
        dispatch({
          type: "UPDATE_USER",
          payload: id,
        })
        console.log(response);
      })
  };
