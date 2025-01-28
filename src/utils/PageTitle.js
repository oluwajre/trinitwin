import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = ({title}) => {
    const location = useLocation();

    useEffect(() => {
      if (title === '') {
        document.title = 'Trinitwin';
      }
      else {
        document.title = `Trinitwin - ${title}`;
      };
      
    }, [location, title]);
  
    return null;
}

export default PageTitle