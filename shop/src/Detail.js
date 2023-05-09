import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

let YellowBtn=styled.button`
    background: ${props=>props.bg};
    // blue props가 들어오면 글자색상으로 white를 남기기
    color:${props => props.bg=='blue' ? 'white' : 'black'};
    padding:10px;
`

// 기존 스타일 복사 가능
const NewBtn=styled(YellowBtn)` 
    // css로 커스터마이징
    border-radius: 15px;
`

let Box=styled.div`
    background:grey;
    padding:20px;
`
function Detail(props){

    // 유저가 :id 자리에 적은거 가져와줌
    let {id}=useParams(); 
    let [alert, setAlert]=useState(true)
    let [count, setCount] = useState(0)

    useEffect(()=>{ 
        //mount, update 시 여기 함수 안쪽 코드 실행됨 
        //setTimeout(()=>{ 실행할 코드}, 1000)
        let t=setTimeout(()=>{ setCount(count+1)<=2 ? setAlert(true) : setAlert(false)}, 2000)
        return()=>{
            clearTimeout(t) //타이머 제거하고 싶으면 
        }
    },[])

    return(
        <div className="container">
            { alert==true ? 
            <div className="alert alert-warning">
                2초 이내 구매 시 할인
            </div> : false }

            {count}
            <YellowBtn onClick={()=>{setCount(count+1)}} bg="blue">버튼</YellowBtn>
            
            <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
        </div>
    </div>
    </div> 

    )

}

export default Detail;