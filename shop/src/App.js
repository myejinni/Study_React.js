import './App.css';
import {Button, Navbar, Container, Nav, Card} from 'react-bootstrap';
import bg from './img/bg.png'
import product from './data.js';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import detailPage from './detailPage.js';

function App() {

  // 상품 데이터가 들어있음
  let [shoes] = useState(product)

  let navigate=useNavigate()

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}} style={{ textDecoration: "none" ,padding:"10px"}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')  }} style={{ textDecoration: "none" , padding:"10px"}}>Detail</Nav.Link>
            <Nav.Link>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 페이지 구분 */}
      <Routes>
        {/* main-page */}
        <Route path='/' element={
        <>
          <div className='main-bg'></div>
            <div className="container">
              <div className="row">
          
              { // shoes 갯수만큼 반복문 돌리기
                shoes.map((a,i)=>{
                  return(
                    <Product shoes={shoes[i]} i={i+1}></Product>
                  )
              })}
              </div>
           </div>
          </>
        } />
        {/* detail-page */}
        <Route path='/detail' element={detailPage()} />
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버</div>}/>
          <Route path='location' element={<About/>}/>
        </Route>
        <Route path='*' element={<div>없는 페이지</div>} />
      
      </Routes>

    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props){

  return(
        <div className="col-md-4">  
          <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} width="80%"/>
          <h4>{ props.shoes.title }</h4>
          <p>{ props.shoes.price }</p>
        </div>
  )
}

export default App;
