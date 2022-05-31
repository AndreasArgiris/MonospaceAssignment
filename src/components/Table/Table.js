import React from 'react'
//styles
import "./Table.scss"
//react redux
import { useSelector,useDispatch } from "react-redux";
//actions
import {UpdateUserAction } from "../../redux/actions/usersAction";
import {SelectedUserIncrementAction,SelectedUserDecrementAction } from "../../redux/actions/selectedUsersAction";
//custom functions
import setTextType from '../../customFunctions/setTextType';
import setBackColorType from '../../customFunctions/setBackColorType';

function Table() {
  const dispatch=useDispatch()
  //we retriving data from our state
  const {users} = useSelector((state) => state.users);
  //this custom function dispatches action checking if checkbox is checked
  const selectedUsersHandler=(e)=>{
      if (e.target.checked) {
        dispatch(SelectedUserIncrementAction())  
      } else {
        dispatch(SelectedUserDecrementAction())       
      }
    };

  return (  
    <div className='table'>
      <div className='table-headers'>
         <span className='table-checkbox'><input type="checkbox"></input>
         </span>
         <span className='table-type'><h3>TYPE</h3></span>
         <span className='table-name'><h3>NAME</h3></span>
         <span className='table-email'><h3>EMAIL</h3></span>
         <span className='table-phone'><h3>TELEPHONE</h3></span>
         <span className='table-status'><h3>STATUS</h3></span>
      </div>
    {users ?
    users.map((user)=>{
      return(
        <div className='table-body' >
           <span className='table-checkbox'><input type="checkbox" onClick={(e)=>{selectedUsersHandler(e)}}></input></span>
           <span className='table-type table-type-body'><span className={`type-border ${setBackColorType(user.type)}`}><h3>{setTextType(user.type)}</h3></span></span>
           <span className='table-name-body'><h3>{user.name}</h3></span>
           <span className='table-email-body'><h3>{user.email}</h3></span>
           <span className='table-phone-body'><h3>{user.phone}</h3></span>
           <span className='table-status-body'>{user.active===false ?
           <span className='switch-user_unactive' onClick={()=>dispatch(UpdateUserAction(user.active,user.email,user.name,user.phone,user.type,user.id))}></span> :
           <span className='switch-user_active' onClick={()=>dispatch(UpdateUserAction(user.active,user.email,user.name,user.phone,user.type,user.id))}></span>}</span>
        </div>
      )
    })
    : null
    }

  </div>
  )
}

export default Table