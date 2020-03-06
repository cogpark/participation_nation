import React from "react";

function Feedback(props) {

    /* Retained from the original class I wrote -- shows how backend server interactions can go down
    componentDidMount() {
        fetch('/api/feedback', {method: "POST"})
        .then(res => res.text())
        .then(data => console.log("post request: ", data));

        fetch('/api/data')
        .then(res => res.json())
        .then(data => this.setState({data}, () => console.log("data fetched: ", data)));
    }
    */
   
    /* Contat row 
    <h5>Contact</h5>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input type="email" name="email" class="form-control" id="inputEmail" placeholder="e.g. jlebowski@earthlink.net"></input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputName">Name</label>
              <input type="text" name="name" class="form-control" id="inputEmail" placeholder="Dude"></input>
            </div>
          </div>
      */

    return (
        <form method="POST" action="/api/feedback">
          <h2>See something wrong? Don't see something you want to see?</h2>          
            <h3>Tell us about it:</h3>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">STATE:</label>
              <select id="inputState" name="selectedState" class="form-control">
                <option key="0" value="other">None/other</option>
                {props.usStates.map((value, i) =>
                    <option key={i+1} value={value}>{value}</option>)}
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputElection">ELECTION:</label>
              <select id="inputElection" name="selectedElection" class="form-control">
                <option key="0" value="none">None/other</option>
                {props.elections.map((value, i) =>
                    <option key={1+i} value={value}>{value}</option>)}
              </select>
            </div>
            <div class="form-group col-md-12">
              <label for="comment">FEEDBACK:</label>
              <textarea class="form-control" name="comment" placeholder="Feedback" id="comment"></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        );
}

export default Feedback;
