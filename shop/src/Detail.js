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

    return(
        <div className="container">
            <Box>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
                <NewBtn bg='yellow'>버튼</NewBtn>
            </Box>

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