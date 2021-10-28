import styled from "styled-components";
import { useState } from "react";

const Input = styled.input`
height: 18px;
width: 300px;
`
export default function Form({ item }) {
    const [value, setValue] = useState();    
    const [isOpen, setIsOpen] = useState(false);

    const valueChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // 수정 기능 (PUT)
    function put() {
        if(window.confirm("수정 하시겠습니까?")) {
            fetch(`http://localhost:3001/items/${item.id}` , {
                method : "PUT",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    ...item,
                    code : value
                })
            })
            .then(res => {
                if(res.ok){
                    console.log("수정 완료");
                    window.location.reload()
                }
            })
        }
    }


    // 삭제 기능 (DELETE)
    function del() {
        if(window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/items/${item.id}`, {
                method : 'DELETE'
            }).then(res =>{
                if(res.ok) {
                    console.log("삭제 완료");
                    window.location.reload()
                }
            })
        }
    }

    // 숨겨놓은 input 창 보이게 하기
    function showInput() {
        setIsOpen(!isOpen);
    }
    return(
        <>                        
            <button onClick={showInput}> {isOpen !== true ? "수정" : "숨기기" } </button>
            <button onClick={(e) => del(e)}>삭제</button>

            {isOpen === true && <div>
                <form onSubmit={handleSubmit}>
                    <Input type="text" value={value || item.code } onChange={valueChange}/>
                    <button onClick={(e) => put(e)}>코드 수정</button>
                </form>              
            </div>}
        </>
    )


}