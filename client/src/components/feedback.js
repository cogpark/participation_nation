import React from "react";

class Feedback extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    usStates: this.props.usStates,
	    elections: this.props.elections,
	    state: 'None/other',
	    election: 'None/other', 
	    comment: null,
	    message: null,
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.setMessage = this.setMessage.bind(this);

	this.setUsState = this.setUsState.bind(this);
	this.setElection = this.setElection.bind(this);
	this.setComment = this.setComment.bind(this);
    }

    setMessage(message) {
	this.setState({message});
    }

    setUsState(e) {
	this.setState({state: e.target.value});
    }

    setElection(e) {
	this.setState({election: e.target.value});
    }

    setComment(e) {
	this.setState({comment: e.target.value});
    }

    handleSubmit(e) {
	e.preventDefault(); // magic
	const data = {
	    comment: this.state.comment,
	    selectedState: this.state.state,
	    selectedElection: this.state.election,
	};
	console.log(data);

	fetch('/api/feedback', {
	    method: 'POST',
	    headers: {
		// 'application/json' turned out to be the wrong value for this field
		'Content-Type': 'application/json', 
	    },
	    body: JSON.stringify(data),
	}).then(dat => {
	    this.setMessage('Thanks for your feedback!');
	}).catch(err => {
	    console.log(err);
	    this.setMessage('Feedback not received--please try again');
	});
    }

    render() {
	return (
	    <form onSubmit={this.handleSubmit}>
	      <h2>See something wrong? Don't see something you want to see?</h2>          
		<h3>Tell us about it:</h3>
		{this.state.message &&
		    <div className="alert alert-success">{this.state.message}</div>
		}
	      <div className="form-row">
		<div className="form-group col-md-6">
		  <label htmlFor="inputState">STATE:</label>
		  <select id="inputState" onChange={this.setUsState} name="selectedState" className="form-control">
		    <option key="0" value="other">None/other</option>
		    {this.state.usStates.map((value, i) =>
			<option key={i+1} value={value}>{value}</option>)}
		  </select>
		</div>
		<div className="form-group col-md-6">
		  <label htmlFor="inputElection">ELECTION:</label>
		  <select id="inputElection" onChange={this.setElection} name="selectedElection" className="form-control">
		    <option key="0" value="other">None/other</option>
		    {this.state.elections.map((value, i) =>
			<option key={1+i} value={value}>{value}</option>)}
		  </select>
		</div>
		<div className="form-group col-md-12">
		  <label htmlFor="comment">FEEDBACK:</label>
		  <textarea className="form-control" onChange={this.setComment} name="comment" placeholder="Feedback" id="comment"></textarea>
		</div>
	      </div>
	      <button type="submit" className="btn btn-primary">Submit</button>
	    </form>
	);
    }
}

export default Feedback;
