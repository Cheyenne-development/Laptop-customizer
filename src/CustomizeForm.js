import React from 'react'



import CustomizeOptions from './CustomizeOptions'
import STORE from './STORE'

export default class CustomizeForm extends React.Component {


  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (

      <form className="main__form">
        <h2>Customize your laptop</h2>
        <CustomizeOptions
          handleUpdate={this.props.handleUpdate}
          store={STORE}
          selected={this.props.selected}
        />
      </form>

    );
  }
}
