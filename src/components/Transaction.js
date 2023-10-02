import Item from "./item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const data = [
    {title:"ค่าขนส่ง",amount:8000},
    {title:"ค่าน้ำมัน",amount:2000},
    {title:"ค่ากิน",amount:3000},
    {title:"เงินเดือน",amount:30000},
    {title:"ค่าประกัน",amount:300},
    {title:"ค่าเดินทาง",amount:800}
  ]
    return (
    <ul className="item-list">
      {data.map((element)=>{
          return  <Item {...element} key = {uuidv4()} />
      })}
    </ul>
    );
  }


export default Transaction