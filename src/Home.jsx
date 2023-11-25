import { useState } from "react";

export default function Home(){

    const [videos, setvideos] = useState([]);

    useEffect(() => {
        localStorage ("Videos", JSON.stringify((videos))
    },[video]);



    return(
        <h1>PTAC 2 - PROJETO FINAL</h1>
     );

     function Cards({ listaVideos }){

     return (
        listaVideos.map((video) =>
        <div className="card">
            
        </div>)
     )
     }


     function Menu({}){

     }


     function Header({}){

     }

     
}