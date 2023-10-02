import Item from "./item";
import './Transaction.css'

const Transaction = () => {
  const data = [
    {title:"ค่ารักษาพยาบาล",amount:2000},
    {title:"ค่าน้ำมัน",amount:5000},
    {title:"ค่าเช่าบ้าน",amount:8000},
  ]
    return (
    <ul className="item-list">
     <Item title={data[0].title} amount = {data[0].amount}/>
     <Item title={data[1].title} amount = {data[1].amount}/>
     <Item title={data[2].title} amount = {data[2].amount}/>
    </ul>
    );
  }


export default Transaction