import useFetch from "../hooks/useFetch";

export default function CreateYoutuber() {

    const siteNames = useFetch(`http://localhost:3001/siteNames`);
    console.log(siteNames);
    // function post() {
    //     fetch(`http://localhost:3001/items/${item.id}` , {
    //         method : "POST",
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },
    //         body : JSON.stringify({
    //             ...item[index],
    //             code : value
    //         })
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             console.log("생성 완료");
    //             window.location.reload()
    //         }
    //     })
    // }


    return (
        <>
            <h1>항목 추가</h1>
            <form>
                <div>
                    <label>채널명</label>
                    <input type="text" placeholder="채널명"/>
                </div>
                <div>
                    <label>사이트</label>
                    <select>
                        {siteNames.map((siteName) => (
                            <option key={siteName.SiteId}>{siteName.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>할인 코드</label>
                    <input type="text" placeholder="할인 코드"/>
                </div>
                <button>저장</button>
            </form>
        </>
    )
}