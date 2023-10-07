import Item from "./item";
import './Transaction.css';

const Transaction = (props) => {
  const {items} = props
    return (
    <ul className="item-list">
      {items.map((element)=>{
          return  <Item {...element} key={element.id} />
      })}
    </ul>
    );
  }
 

export default Transaction