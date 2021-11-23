const Food = (props) => {
    const { meals } = props.d;    
    console.log(meals)
    return (
        <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col">
                <div className="card h-100">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title { meals.[0].strArea}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Food;