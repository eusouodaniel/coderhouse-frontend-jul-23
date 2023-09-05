import { Component } from "react";
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: ['JS', 'Node', 'React']
    }
  }
  render() {
    const cursos = this.state.cursos.map(curso => {
      <Button text={curso} />
    });
    console.log(cursos);
    return (
      <div>
        <p>AppContainer</p>
        <p>{ cursos }</p>
        <Input placeholder='Digite seu email' type='text' />
      </div>
    )
  }
}