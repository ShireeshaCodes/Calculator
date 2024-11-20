import { useState } from 'react';
import './App.css';

const App = () => {
  const arr = ["1","2","3","4","5","6","7","8","9","0","+","-","/","=","*","C"];
  const [value,setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = (e) => {
    const id = e.target.id ; 
    if(id === "C" ) {
      setValue("");
    }else if(id === "="){
      handleSubmit();
    }else {
      setValue(val => val + id)
    }

  }

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch(err) {
      alert("Invalid Inputs")
    }
  }



  return (
    <div className='container'>
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}/>
      </form>
      <div className='calculator' onClick={handleClick}>
        {
          arr.map((item,index) => (
            <button key={index} id={item} className='cell'>{item}</button>
          ))
        }
      </div>
    </div>
  );
}

export default App;
