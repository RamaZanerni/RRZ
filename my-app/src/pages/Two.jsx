import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ressurser from '../assets/ressurser';

const Two = () => {

  const [value, setValue] = useState([]);

  useEffect(()=>{
    const filteredCss = ressurser.filter(
      (item) => item.category === 'css'
    );
    setValue(filteredCss);
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

export default Two