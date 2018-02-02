import React from 'react';
import Count from './Count';

export default class App extends React.Component {
	
		constructor(){
		super();
		this.state = {
			counter: 0,
			
		}
	}
	
	handleClick(){
		var counter = this.state.counter
		this.setState({counter: counter + 1})
	}
	
 render() {
	  
	  if(this.state.counter > 3) {
		  
		 return (
			 
				<Count/>
	    )
		 
	  }  else {
	     return (
             <div>
				<h1>{this.state.counter}</h1>
				<button onClick={this.handleClick.bind(this)}>click!</button>
			</div>
		);
	 }
  }
}

