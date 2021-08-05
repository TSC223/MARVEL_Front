import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios" ; 
import Header from "../components/Header";


const Comics = () => {
  const {id} = useParams() ;
  console.log(2,useParams)

    const [data, setData] = useState() ;
    const [loading, setLoading] = useState(true) ;
    
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=lKmpBf8oAA8k00HF/${id}`
            );
            console.log(response.data) ;
            setData(response.data) ;
            setLoading(false) ;
        } catch (error) {
            console.log(error.message) ;
        }
    } ;
    fetchData();
}, [id]); 

    return loading ?(
        <p>Comics en cour de chargement...</p>
    ) : (
         <>
        okokok
        <Header />
        
        <ul>
        {data.results.map((elem, index) => {
          const keys = Object.keys(elem);
          // 1er tour : ["MARQUE"]
          // 2e tour : ["TAILLE"]

          return (
            <li key={index}>
              <span>{keys[0]}</span>
              <span>{elem[keys[0]]}</span>
              {/* 1er tour : elem.MARQUE
                  2e tour : elem.TAILLE
               */}
            </li>
          );
        })}
      </ul>
        
        </>        
    )
}


export default Comics ;