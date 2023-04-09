/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post='강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자코트추천', '강남우동맛집','파이썬독학']);
  let [좋아요, 좋아요변경]= useState([0,0,0]);
  let [modal, setModal]=useState(false);
  let [title, setTitle]=useState(0,1,2);
  let [cnt, setCnt]=useState(0);

  // 입력창에 넣을 인풋값(글제목)
  let [input, setInput]=useState(''); 
  let [remove, setRemove]=useState('')


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


        {
          글제목.map(function(a,i){
            return <div className='list'>
            <h4 onClick={()=>{
            setCnt(cnt+1)
            setModal(true)
            setTitle(i)
            }}> {글제목[i]}

            <span onClick={(e)=>{ e.stopPropagation();
              let 좋아요카피=[...좋아요];
              좋아요카피[i]=좋아요카피[i]+1;
              좋아요변경(좋아요카피)
              }}> 👍</span>{좋아요[i]} 
            </h4>
            <p>2월 17일 발행</p>

            <button onClick={()=>{
              let newTitle=[...글제목];
              newTitle.splice(i,1)
              글제목변경(newTitle)
            }}>삭제</button>

          </div>
          })
        }

        <input onChange={(e)=>{
            (setInput(e.target.value)); 
            }}/>

        <button onClick={()=>{ 

            // 카피본 만들기
            let newTitle=[...글제목];
            // newTitle 맨 처음에 유저가 입력한 글 추가
            newTitle.unshift(input);
            글제목변경(newTitle)
          }}>글발행</button> 

       


        {
          cnt%2==0 ? null : <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/>
        }

    </div>
  );
}

// 모달 컴포넌트
function Modal(props){

  return(
    <div className='modal'>
          <h4>{props.글제목[props.title]}</h4>

          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={()=>{
            // props.글제목변경(['여자코트추천','강남우동맛집','파이썬독학'])
          }}>글수정</button>
    </div>
  )
}

export default App;
