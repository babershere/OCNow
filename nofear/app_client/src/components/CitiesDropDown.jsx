import React from 'react'

class CitiesDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'User Default City'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Now scraping: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
             
          <select className='form-control' value={this.state.value} onChange={this.handleChange}>
            <option value="User Default City">Pick Another City</option>
            <option value="Costa Mesa">Costa Mesa</option>
            <option value="Huntington Beach">Huntington Beach</option>
            <option value="Newport Beach">Newport Beach</option>
          </select>
      
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}

export default CitiesDropDown;