import dummy from "../db/data.json";

export default function CodeDetail() {
    
    const itemFilter = dummy.items.filter(item =>(
        item.youtuber === "지피티"
    ));

    return (
        <>
            {itemFilter.map(item => (
                <div key={item.id}>
                    <p>{item.metree}</p>
                    <p>{item.ranking}</p>
                    <p>{item.myprotein}</p>
                    <p>{item.proteinworks}</p>
                </div>
            ))}
        </>
    )
}