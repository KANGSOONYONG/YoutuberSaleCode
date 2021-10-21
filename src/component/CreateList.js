import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";
import { useRef } from "react";
import { useHistory } from "react-router";
export default function CreateYoutuber() {

    const siteNames = useFetch(`http://localhost:3001/siteNames`);
    const youParams = useParams().youtuber;
    // (항목 추가가 완료되면) Link to처럼 .push 해주면 그 페이지로 바로 이동하게 만들어주는 기능
    const history = useHistory();

     // form으로 감싸져 있는 버튼을 눌렀을 경우 새로고침 되는 "기본"기능을 막아줌 -> e.preventDefalult
     // current 속성을 이용하면 해당 요소에 접근할 수 있고, value는 input에 입력된 값을 얻을 수 있음

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/items/` , {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                youtuber : youParams,
                siteName : siteRef.current.value,
                code : codeRef.current.value
            })
        })
        .then(res => {
            if(res.ok){
                alert("생성 완료");
                history.push(`youtuber/${youParams}`)
            }
        })      
    }

    // 저장 버튼을 눌렀을 때 입력한 정보들을 얻어오기 useRef 이용해야함
    const siteRef = useRef(null);
    const codeRef = useRef(null);


    return (
        <>
            <h1>{youParams}의 항목 추가</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>채널명</label>
                    <span>{youParams}</span>
                </div>
                <div>
                    <label>사이트</label>
                    <select ref={siteRef}>
                        {siteNames.map((siteName) => (
                            <option key={siteName.SiteId} value={siteName.name}>
                                {siteName.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>할인 코드</label>
                    <input type="text" placeholder="할인 코드" ref={codeRef}/>
                </div>
                <button>저장</button>
            </form>
        </>
    )
}