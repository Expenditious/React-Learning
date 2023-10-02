import Item from "./item";
import './Transaction.css'

const Transaction = () => {
  const data = [
    {id:1,title:"ค่ารักษาพยาบาล",amount:2000},
    {id:2,title:"ค่าน้ำมัน",amount:5000},
    {id:3,title:"ค่าเช่าบ้าน",amount:8000},
    {id:4,title:"จ่ายค่าประกัน",amount:300}
  ]
    return (
    <ul className="item-list">
      {data.map((element)=>{
          return  <Item {...element} key = {element.id} />
      })}
    </ul>
    );
  }


export default Transaction