import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Loading from './Loading';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



function App() {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);
// const [num, setNum] = useState(false);
  useEffect(()=>{
    async function fetchdata(){
      axios.get(`https://reqres.in/api/users?Page=1`).then(res =>{
     setStudent(res.data.data);
    
    })
}
fetchdata();


}
  ,[])
  console.log(student);
  console.log(loading);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Udata
          </Navbar.Brand>
          <button className='btn btn-warning' onClick={() => setLoading(true)} >Get users</button>
        </Container>
      </Navbar>
     
      <div className="grid-view">
      
{loading ? Array.from(student).map((student)=>(
    //  <ListItem key={student.id} student={student}/>
    <>
  <div className='card-wrapper'>
       <Card style={{ width: '15rem', height:'15rem' , display:'flex' , justifyContent:'center', alignItems:'center'}}>
      <Card.Img style={{width:'10rem' ,height:'10rem'}} variant="top" src={student.avatar} />
      <Card.Body>
        <Card.Title>{student.first_name} {student.last_name}</Card.Title>
        <Card.Text>
         {student.email}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
    )):<Loading/>}
        </div>
    </div>
    

  );
}

export default App;