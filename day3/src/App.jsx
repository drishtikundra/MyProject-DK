import React from 'react'
import Addtodo from './Components/Addtodo'
import Title from './Components/Title';
import List from './Components/List';
export default function App() {
  return (
    <>
    
<div className =' container shadow p-3 mb-5 bg-body-tertiary rounded'>
  <center>
  <Title/>
  <Addtodo/>
  <List/>
  </center>

</div>
    
    </>
   
  );
}
