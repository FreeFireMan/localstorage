import React, {useRef, useState} from "react";
import './App.css';

// function App() {
//   const firstName = useRef();
//   const lastName = useRef();
//   const email = useRef();
//   const age = useRef();
//   const pass = useRef();
//
//   const onSubmit = (e) => {
//     e.preventDefault();
//
//     /*const {// target: [
//     //   {value: firstName},
//     //   {value: lastName},
//     //   {value: email},
//     //   {value: age},
//     //   {value: pass}
//     // ]
//     target: {
//       firstName,
//       lastName,
//       email,
//       age,
//       pass,
//     }} = e; */
//
//     alert(JSON.stringify({
//       firstName: firstName.current.value,
//       lastName: lastName.current.value,
//       email: email.current.value,
//       age: age.current.value,
//       pass: pass.current.value,},
//       null, 1));
//
//     firstName.current.value = '';
//     lastName.current.value = '';
//     email.current.value = '';
//     age.current.value = '';
//     pass.current.value = '';
//   }
//
//   return (
//     <div className='App'>
//       <h1>this is input!</h1>
//       <form onSubmit={onSubmit}>
//         <input ref={firstName} type={'text'} name='firstName' placeholder={'first name'}/>
//         <br />
//         <br />
//         <input ref={lastName} type={'text'} name='lastName' placeholder={'last name'}/>
//         <br />
//         <br />
//         <input ref={email} type={'email'} name='email' placeholder={'email'}/>
//         <br />
//         <br />
//         <input ref={age} type={'number'} name='age' placeholder={'age'}/>
//         <br />
//         <br />
//         <input ref={pass} type={'password'} name='pass' placeholder={'pass'}/>
//         <br />
//         <br />
//         <button type={'submit'}>submit</button>
//       </form>
//     </div>
//   );
// }

function App() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    pass: '',
  });

  const onSubmit = () => {
    alert(JSON.stringify(userData, null, 2));
  }

  const updateUserData = (e) => {
    const {target: {name, value}} = e;

    if (name === 'age' && !Number(value)) {
      return;
    }

    setUserData({...userData, [name]: value});
  }

  return (
    <div className='App'>
      <h1>this is input!</h1>
      <input value={userData.firstName} onChange={updateUserData} type={'text'} name='firstName' placeholder={'first name'}/>
      <br />
      <br />
      <input value={userData.lastName} onChange={updateUserData} type={'text'} name='lastName' placeholder={'last name'}/>
      <br />
      <br />
      <input value={userData.email} onChange={updateUserData} type={'email'} name='email' placeholder={'email'}/>
      <br />
      <br />
      <input value={userData.age} onChange={updateUserData} type={'number'} name='age' placeholder={'age'}/>
      <br />
      <br />
      <input value={userData.pass} onChange={updateUserData} type={'password'} name='pass' placeholder={'pass'}/>
      <br />
      <br />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}

export default App;
