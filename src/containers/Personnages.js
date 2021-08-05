import {useState, useEffect} from "react";
import axios from "axios" ;
import Header from "../components/Header";
import { Link } from "react-router-dom";



const Personnages = () => {
    const [data, setData] = useState() ;
    const [isloading, setisLoading] = useState(true) ;

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:4000`

            );
            console.log(1,response.data) ;
            setData(response.data) ;
            setisLoading(false) ;
        } catch (error) {
            console.log(error.message) ;
        }
    } ;
    fetchData();
}, []);
    return isloading ?(
        <p>Page personnage : En cour de chargement...</p>
    ) : (
         <>
        <Header />
        
        <div style={{border:"2px solid brown",height:200}}>
            <h1>Hero</h1>
            <h1 style={{textAlign:"center"}}>Home & Personnages</h1>
        </div>
         <section className="section_personnages_affichage">

        <div className="Card_personnages">
            {data.results.map(theMarvel => { 
               
                return (
                    <>
                    <Link to={`/Comics/${theMarvel._id}`}>
                        
                        <div key={theMarvel._id}>
                            
                            <div className="marvel_descript">
                                <p>{theMarvel.name}</p>
                            </div>   
                            <img className="marvel_img"
                        src={theMarvel.thumbnail.path + "." + theMarvel.thumbnail.extension}
                        alt={theMarvel.name}/>
                        </div>
                    </Link>
                    </>
                         )
            })}
        </div>
</section>
        </>       
       
    )
}


export default Personnages ;