import React from 'react'
//styles
import './TableUsersBar.scss'
//icon,svg
import { IoWomanOutline } from "react-icons/io5";
import QuestionMarkIcon from "./assets/icons/Questionmark.svg"
//state extract
import { useSelector } from 'react-redux';

function TableUsersBar() {
   //we retriving data from our state
  const selectedUsers = useSelector((state) => state.selectedUsers);
  return (
    <aside className='table-users_bar'>
        <div className='table-users_bar-left' >
        <IoWomanOutline className="users-icon"/>
        <h2>Users</h2>
        </div>
        <div className='table-users_bar-right' >
        <h2>{selectedUsers} selected</h2>
        <img src={QuestionMarkIcon} alt='questionmark'/>
        </div>
    </aside>
  )
}

export default TableUsersBar