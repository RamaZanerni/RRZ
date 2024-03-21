import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ressurser from '../assets/ressurser';

const  One = () => {
  
  const [value, setValue] = useState([])

  useEffect(()=>{
    const filteredHtml = ressurser.filter(
      (item) => item.category === 'html'
    )
    setValue(filteredHtml);
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

export default One