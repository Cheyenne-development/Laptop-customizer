import React from 'react'
import slugify from 'slugify';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default class Parts extends React.Component {
    
    
    render() {
        const parts = this.props.part    
        const hardware = this.props.store[parts].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            const parts = this.props.part
            console.log(item, "item")
            console.log(parts, "feature")
                return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        checked={item.name === this.props.selected[parts].name}
                        onChange={e => this.props.handleUpdate(parts, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                            </label>
                </div>
            );
        });
            return (
            <div>
                { hardware }
            </div >
        )
    }
}