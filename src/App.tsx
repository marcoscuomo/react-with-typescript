import React, {useState, useMemo, useRef, useContext, useImperativeHandle, useReducer} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {

  //The state type must be passed by generic
  const [users, setUsers] = useState<User[]>();
  
  //For DOM elements we must type the ref with the HTML + the type of element html 
  //For the useRef we must boot with null
  const inputRef = useRef<HTMLInputElement>(null);

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])
  
  async function loadData() {
    const response = await fetch('https://api.github.com/users/diego3g');
    const data = await response.json();

    setUsers(data);
  }
  
  function focusOnInput() {
    //we force with the signal ! indicating that current will never be null
    inputRef.current!.focus();
  }

  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default App;
