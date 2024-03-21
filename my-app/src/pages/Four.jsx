import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ressurser from '../assets/ressurser';

const Four = () => {

  const [value, setValue] = useState([]);

  useEffect(()=>{
    const filteredReact = ressurser.filter(
      (item) => item.category === 'react'
    );
    setValue(filteredReact);
  },[])

  return (
    <div>
      <ul>
      {
        value.map((item,index)=>(
            <li><Link to={item.url}>{item.title}</Link></li>
          
        ))
      }
      </ul>
    </div>
  )
}

export default Four