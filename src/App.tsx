import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Nattadudu from './Nattadudu'
import Mom from './Mom'
import Boss from './Boss'
import Dee from './Dee'
import Kids from './Kids'





function App() {
  return (
    <div className="App">
       <Navbar/>
       
       <div className ="min-div">
         <h1>เลือกผู้ชม</h1>
      <div className="Memberdiv">
         <button className="btn" ><span><Nattadudu/></span></button>
         <button className="btn"><span><Mom/></span></button>
         <button className="btn"><span><Dee/></span></button>
         <button className="btn"><span><Boss/></span></button>
         <button className="btn"><span><Kids/></span></button>
      </div>
       <button className="mnProfile">จัดการโปรไฟล์</button>
       </div>
    </div>
  );
}

export default App;
