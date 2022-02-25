import { useState } from 'react'

// const gifts = [
//     'cpu i9',
//     'RAM 32GB RGB',
//     'RGB Keyboard'
// ]

function App() {

//   const [infor, setInfor] = useState({
//     name: 'Tuyn',
//     age: 18,
//   });
// const handleClick = () => {
//   setInfor(huhu => ({...huhu, bio: 'oke'}));
// };

//   return (
//     <div className="App" style={{paddingLeft: 50}}>
//       <h1>{JSON.stringify(infor)}</h1>
//       <button onClick = {handleClick}>update</button>
//     </div>
//   );

// const [gift, setGift] = useState();

// const handleClick = () => {
//     let rand = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[rand]);
// }
// return (
//     <div className="App" style={{paddingLeft: 50}}>
//        <h1>{gift || 'Chưa có phần thưởng'}</h1>
//        <button onClick = {handleClick}>Nhận thưởng</button>
//      </div>
// )

const [name, setName] = useState('');
const [email, setEmail] = useState('');

// const handleClick = () => {
//   console.log({
//     name,
//     email
//   })
// }

// return (
//     <div className="App" style={{paddingLeft: 50}}>
//        <input
//        value={name} 
//        onChange={e => {setName(e.target.value)}}/>
//        <input
//        value={email} 
//        onChange={e => {setEmail(e.target.value)}}/>
//        <button onClick={handleClick}>register</button>
//        <p>{name}</p>
//      </div>
// )

const courses = [
  {
    id: '1',
    name: 'HTML, javaScipt'
  },
  {
    id: '2',
    name: 'RUBY, JAVA'
  },
  {
    id: '3',
    name: 'PHP, C++'
  },
]

// const [checked, setCheked] = useState();


// return (
//   <div style={{paddingLeft: 50}}>
//     {courses.map((course) => (
//       <div key={course.id}>
//         <input
//         type='checkbox'
//         checked = {checked === course.id}
//         onChange={() => {setCheked(course.id)}}
//         />{course.name}
//       </div>
//     ))}
//   </div>
// )

const [checked, setCheked] = useState([]);

const isCheck = (value) => checked.includes(value);

const handlingChange = (id) => {
  setCheked(prev => {
    const isChecked = isCheck(id);
    if(isChecked){
      return checked.filter((check) => check != id);
    }
    if(!isChecked){
      return [...prev, id]
    }
  });
}

const handlingSubmit = () => {
  if(checked.length){
    console.log(checked);
  }
}

  return (
    <div style = {{padding: 50}}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type='checkbox'
            checked={isCheck(course.id)}
            onChange={() => handlingChange(course.id)}
          />{course.name}
          </div>
      ))}
      <button onClick={handlingSubmit}>register</button>
    </div>
  )
}


export default App;
