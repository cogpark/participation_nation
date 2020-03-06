import React, {Component} from "react";

class Feedback extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    // demo -- use fetch to send get/post requests to the backend
    componentDidMount() {
        fetch('/api/feedback', {method: "POST"})
        .then(res => res.text())
        .then(data => console.log("post request: ", data));

        fetch('/api/data')
        .then(res => res.json())
        .then(data => this.setState({data}, () => console.log("data fetched: ", data)));
    }

    render () { 
        return (
            <form method="POST" action="/api/feedback">
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="optional"></input>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity"></input>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip"></input>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default Feedback;
