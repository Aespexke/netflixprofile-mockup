import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { UserProfile } from './UserProfile';

interface IUser {
  name: string;
  logoPath: string;
}

const App = () => {
  const [users, setUsers] = React.useState<IUser[]>([{name: "Nattadudu", logoPath: "https://images.pexels.com/photos/6311079/pexels-photo-6311079.jpeg"},{name: "Mom", logoPath: "www.gooogod/abc.jpeg"}, {name: "Dee", logoPath: "www.gooogod/abc.jpeg"},{name: "Boss", logoPath: "https://images.pexels.com/photos/6310957/pexels-photo-6310957.jpeg"}, {name: "Kids", logoPath: "www.gooogod/abc.jpeg"}]);

  const BubbleSort = () => {
    const sortedUser = users;

    sortedUser.forEach(() => {
      sortedUser.forEach((z, j) => {
        if (j + 1 < sortedUser.length) {
          if (sortedUser[j].name > sortedUser[j + 1].name) {
            let temp = sortedUser[j];
            sortedUser[j] = sortedUser[j + 1];
            sortedUser[j + 1] = temp;
            setUsers([...sortedUser]);
          }
        }
      });
    });

    console.log(users);
  }

  return (
    <div className="App">
       <Navbar/>
       <div className ="min-div">
         <h1>เลือกผู้ชม</h1>
         <div className="a">
         {users.map((value, index) => (
            <UserProfile logoPath={value.logoPath} name={value.name} key={index} />
         ))}
         </div>
        <button onClick={() => BubbleSort()} className="mnProfile">จัดการโปรไฟล์</button>
       </div>
    </div>
  );
}

export default App;
