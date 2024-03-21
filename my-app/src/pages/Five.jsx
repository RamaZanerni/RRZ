import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ressurser from '../assets/ressurser';

const Five = () => {

  const [value, setValue] = useState([]);

  useEffect(()=>{
    const filteredHeadless = ressurser.filter(
      (item) => item.category === 'headless-cms'
    );
    setValue(filteredHeadless);
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

export default Five