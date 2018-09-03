import React, {Component} from 'react';
import Hello from '../components/hello'
import Hi from '../components/hi'
var components={
  hello:Hello,
  hi:Hi
}
class Index extends Component{
  constructor(props){
    super(props);
    this.handlViewChange=this.handlViewChange.bind(this);
    this.state={view:'hello'}
  }
  handlViewChange(v){
    this.setState({view:v})
  }
  render(){
    var Comp=components[this.state.view];
    return(
      <div>
        <Comp/>
          <button onClick={()=>this.handlViewChange('hi')}>to Hi</button>
        <img src="../static/favicon.ico" alt=""/>
      </div>
    )
  }
}
export default Index