import './Transaction.css'

const Item = (props) => {
  const name = "พักโรงแรม"
  const amount = 5000
    return (
    <li>{props.title}<span>-{props.amount}</span></li>
    );
}

export default Item