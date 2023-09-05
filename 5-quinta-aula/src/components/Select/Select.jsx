export const Select = ({optionSelected, options}) => {
  // return (
  //   <>
  //     <select onChange={(evt) => optionSelected(evt.target.value)}>
  //       {options.map(option => <option value={option.value}>{option.text}</option>)}
  //     </select>  
  //   </>
  // )
  return options.map(option => (
    <>
      <input type="radio" id={option.value} value={option.value} />
    </>
  ))
}