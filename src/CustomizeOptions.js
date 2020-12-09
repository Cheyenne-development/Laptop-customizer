import React from 'react'
import Parts from './Parts'



export default class CustomizeOptions extends React.Component {
  render() {

    const features = Object.keys(this.props.store).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Parts
            handleUpdate={this.props.handleUpdate}
            store={this.props.store}
            selected={this.props.selected}
            part={feature}
          />
        </fieldset>

      );

    });

    return (
      <div>
        {features}
      </div>
    )
  }
}