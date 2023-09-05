import { useState } from 'react';

const H1 = ({ message, showButton }) => {
  const [course, setCourse] = useState('React');
  return (
    <>
      <h1 onClick={() => setCourse('frontend')}>{message}</h1>
      {showButton({ text: 'Clique aqui' })}
      {course}
    </>
  )
}

export default H1;