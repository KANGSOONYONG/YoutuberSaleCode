import dummy from "../db/data.json";
import { useParams } from "react-router";

export default function CodeDetail() {

    const youParas = useParams().youtuber;

    const itemFilter = dummy.items.filter(item =>(
        item.youtuber === youParas
    ));
    


    return (
        <>
            {itemFilter.map(item => (
                <div key={item.id}>
                    <p>미트리 할인 코드 : {item.metree}</p>
                    <p>랭킹닷컴 할인 코드 : {item.ranking}</p>
                    <p>마이프로틴 할인 코드 : {item.myprotein}</p>
                    <p>더프로틴웍스 할인 코드 : {item.proteinworks}</p>
                </div>
            ))}
        </>
    )
}