import { useState } from 'react';

export const Button = (props) => {
  const [value, setValue] = useState('Estado em function based');
  const [message, setMessage] = useState('Declarei outro estado');
  return (
    <>
      <button onClick={() => setValue('Mutabilizei o estado')}>{props.text}</button>
      <p>{value}</p>
      <p>{message}</p>
    </>
  )
}
