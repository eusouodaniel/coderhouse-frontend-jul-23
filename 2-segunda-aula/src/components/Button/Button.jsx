const Button = ({children,text,value}) => {
  return (
    <>
      { children }
      <button>{text} | {value}</button>
    </>
  )
}

export default Button;