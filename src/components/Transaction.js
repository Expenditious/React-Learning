import Item from "./item";
import './Transaction.css'

const Transaction = () => {
  const data = [
    {title:"ค่ารักษาพยาบาล",amount:2000},
    {title:"ค่าน้ำมัน",amount:5000},
    {title:"ค่าเช่าบ้าน",amount:8000},
    {title:"จ่ายค่าประกัน",amount:300}
  ]
    return (
    <ul className="item-list">
     <Item title={data[0].title} amount = {data[0].amount}/>
      {data.map((element)=>{
          return  <Item title={element.title} amount={element.amount}/>
      })}
    </ul>
    );
  }


export default Transaction