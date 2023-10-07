import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function App() {
  const design = {color:"red",textAlign:"center",fontsize:"1.5rem"}
  const initData = [
    {id:1,title:"ค่าขนส่ง",amount:8000},
    {id:2,title:"ค่าน้ำมัน",amount:2000},
    {id:3,title:"ค่ากิน",amount:3000},
  ]
  const [items,setItems] = useState(initData)
  const onAddNewItem = (newItem) =>{
    setItems((prevItem)=> {
      return [newItem,...prevItem]
    })
  }
  return (
    <div className="container">
      <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items = {items}/> 
    </div>
  );
}

export default App;
