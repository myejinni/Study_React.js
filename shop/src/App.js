import './App.css';
import {Button, Navbar, Container, Nav, Card} from 'react-bootstrap';
import bg from './img/bg.png'
import product from './data.js';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  // 상품 데이터가 들어있음
  let [shoes] = useState(product)

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none" ,padding:"10px"}}>홈</Link>
            <Link to="/detail" style={{ textDecoration: "none" , padding:"10px"}}>상세페이지</Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

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
        <Route path='/detail' element={<div>상세페이지</div>} />
      </Routes>

    </div>
  );
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
