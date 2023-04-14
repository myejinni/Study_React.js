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

      <Routes>
        <Route path='/detail' element={<div>상세페이지</div>} />
        <Route/>
      </Routes>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">main</Nav.Link>
            <Nav.Link href="#sale">sale</Nav.Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

        {/* 상품 목록 3개 */}
        <div className="container">
         <div className="row">
          {/* <Product shoes={shoes[0]} i={1}></Product>
          <Product shoes={shoes[1]} i={2}></Product>
          <Product shoes={shoes[2]} i={3}></Product> */}
          
          { // shoes 갯수만큼 반복문 돌리기
            shoes.map((a,i)=>{
              return(
                <Product shoes={shoes[i]} i={i+1}></Product>
              )
            })
          }
          </div>
        </div>
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
