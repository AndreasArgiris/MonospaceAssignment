import React, {useEffect} from "react";
//general styles
import "./styles/base.scss";
//components
import Table from "./components/Table/Table.js";
import TableUsersBar from "./components/TableUsersBar/TableUsersBar";
//react redux
import { useDispatch } from "react-redux";
//action
import { FetchUsersAction } from "./redux/actions/usersAction";

function App() {
  const dispatch=useDispatch()
  //initial fetch
  useEffect(()=>{
    dispatch(FetchUsersAction())  
  },[])
  return (
    <main className="app-container">
      <TableUsersBar/>
      <Table/>
    </main>
  );
}

export default App;
