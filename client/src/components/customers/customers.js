import React, {Component} from "react";

class Customers extends Component {

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
            <div>
                <h2>Customers</h2>
            </div>
        );
    }
}

export default Customers;
