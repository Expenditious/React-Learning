import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";

function App() {
  const design = {color:"red",textAlign:"center",fontsize:"1.5rem"}
  return (
    <div className="container">
      <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent></FormComponent>
      <Transaction></Transaction>
    </div>
  );
}

export default App;
