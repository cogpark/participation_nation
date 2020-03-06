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

    return (
        <form method="POST" action="/api/feedback">
          <h3>Feedback?</h3>
          <h5>Contact</h5>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input type="email" class="form-control" id="inputEmail" placeholder="e.g. jlebowski@earthlink.net"></input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputName">Name</label>
              <input type="text" class="form-control" id="inputEmail" placeholder="Dude"></input>
            </div>
          </div>
          <h5>Comment</h5>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                {props.usStates.map((value, i) =>
                    <option key={i} value={value}>{value}</option>)}
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputElection">Election</label>
              <select id="inputElection" class="form-control">
                {props.elections.map((value, i) =>
                    <option key={i} value={value}>{value}</option>)}
              </select>
            </div>
            <div class="form-group col-md-12">
              <label for="comment">Comment</label>
              <textarea class="form-control" placeholder="Feedback" id="comment"></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        );
}

export default Feedback;
