import axios from "axios";
import { useEffect, useState } from "react";
import "./getAll.css";
import Item from "./item";



export default function GetAll() {
  const [api, setApi] = useState<string[]>();
 



  useEffect(() => {
    axios.get('http://localhost:3333/user')
    .then((response) => setApi(response.data))
      .catch((erro) => {
        console.log(erro)
      })
  }, []);

  return <div className="container">

{api.map((item,index)=>(
  <Item key={index} item={item} />
))}
  </div>;
}
