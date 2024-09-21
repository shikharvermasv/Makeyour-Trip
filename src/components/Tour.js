import Card from "./Card";

function Tour ({tours ,  removeCard} ){
return (
    <div className="container">
        <div>
        <h2 className="title">MakeyourTrip</h2>
        </div>

        <div className="cards">

        {
            tours.map((tour)=>{
                return <Card {...tour} removeCard={removeCard} ></Card>
                
            })
        }

        </div>

    </div>
)
}

export default Tour;