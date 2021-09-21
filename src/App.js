// import css
import './App.css';

//import pictures
import avatar from './images/avatar.jpg';

//import hooks
import { useState } from 'react';

//import data
import {Data} from './data/Data';

//import component
import Task from './component/Task';

function App() {
  const [active,setActive] = useState(0);

  return (
    <div className="big-container">
      <div className = "container">
      <header>
        <div className="upper-sm-container">
          <img src= {avatar} alt="avatar"/>
          <div>
            <p>Report for</p>
            <p>Cường đẹp trai</p>
          </div>
        </div>
        <div className="category">
          <p onClick={()=>setActive(0)} className={active==0?"active":""}>Daily</p>
          <p onClick={()=>setActive(1)} className={active==1?"active":""}>Weekly</p>
          <p onClick={()=>setActive(2)} className={active==2?"active":""}>Month</p>
        </div>
      </header>
      <Task task={Data} active={active}/>
    </div>
    </div>
  );
}

export default App;
