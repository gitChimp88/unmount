import React from 'react';


export default class Count extends React.Component {
	
		constructor(){
		super();
		this.state = {
			currentCount: 3,
			
		},
			this.timer = this.timer.bind(this)
	}
	
	componentDidMount() {
	  var intervalId = setInterval(this.timer, 1000);
	  this.setState({intervalId: intervalId});
    }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
			
  }

  timer() {
	  if(this.state.currentCount == 1) {
		 this.componentWillUnmount()
	  }
    this.setState({ currentCount: this.state.currentCount -1 });
	  
  }

render() {
	  
	
	     return (
             <div>
				<h1>Component will unmount in {this.state.currentCount}</h1>
			</div>
		);
	 }
 
}
