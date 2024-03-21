import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import resources from '../assets/ressurser';

const Three = () => {

  const [value, setValue] = useState([]);

  useEffect(()=>{
    const filteredJs = resources.filter(
      (item) => item.category === 'javascript'
    );
    setValue(filteredJs);
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

export default Three