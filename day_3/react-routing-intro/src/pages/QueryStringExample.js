import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function QueryStringExample() {
  const [searchParams, setSearchParams] = useSearchParams();
  const user = searchParams.get('userId');
  const completed = searchParams.get('completed');

  useEffect(() => {
    console.log('user:', user);
    console.log('completed:', completed);
    axios.get(`https://jsonplaceholder.typicode.com/todos`, {
      params: {
        userId: user,
        completed
      }
    })
      .then(({data}) => console.log(data))
      .catch((err) => console.log('ERROR:', err));
  }, [completed, user]);

  return (
    <div>
      <h2>Query String Example</h2>
      <p>
        Open the console to see the logged query string values
      </p>
    </div>
  )
}

export default QueryStringExample