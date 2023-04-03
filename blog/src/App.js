/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post='강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자코트추천', '강남우동맛집','파이썬독학']);
  let [좋아요, 좋아요변경]= useState(0);

  return ( 
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* 상품 가나다순 정렬 */}
      <button onClick={()=>{
        let copy=[...글제목];
        copy=copy.sort();
        글제목변경(copy)
      }}>가나다순정렬
      </button>

        <div className='list'>
          <h4>{ 글제목[0] } <span onClick={()=>{ 좋아요변경(좋아요+1) }}>👍</span> {좋아요} </h4>
          <p>2월 17일 발행</p>

          <button onClick={()=>{
            let copy1=[...글제목];
            copy1[0]='여자코트추천';
            글제목변경(cop1y);
            }}>제목 수정</button>

        </div>
        <div className='list'>
          <h4>{글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div>


        
        <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>

    <Modal></Modal>
    <Alert></Alert>

    </div>
  );
}

function Modal(){

  return(
    <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
    </div>
  )
}

export default App;
