import Item from "./item";
import './Transaction.css'

const Transaction = () => {
    return (
    <ul className="item-list">
     <Item title="ค่ารักษาพยาบาล" amount = "2000"/>
     <Item title="เงินเดือน" amount = "50000"/>
     <Item title="ค่าเดินทาง" amount = "500"/>
    </ul>
    );
  }
  

export default Transaction