import React from "react";

const DEALS_API_KEY = process.env.REACT_APP_DEALS_API_KEY;

const aStyle = {
    width: '100px',
    height: '56px'
}

const fixHeight = {
    minHeight: "115px",
    maxHeight: '115px'
}

class Deals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // city: '',
            deals: []
        }
        this.getDeals = this.getDeals.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    getDeals = async () => {
        const deals_api_call = await fetch(`https://api.discountapi.com/v2/deals?api_key=${DEALS_API_KEY};per_page=7;location=${this.props.city}+ca;radius=1`);

        const data = await deals_api_call.json();
        const dealsArr = data.deals;
        this.setState({ deals: dealsArr })
    }
    componentDidMount() {
        this.getDeals();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.getDeals();
        }
    }

    render() {
        return (
            <div>
                <div className='panel panel-default' id='banner-deals' style={fixHeight}>
                    <div className='panel-body'>
                        <h3 className='weather__value'>{this.props.dropDownText} Deals: </h3>
                    </div>
                </div>
                {this.state.deals.map((elem, i) => {
                    return (
                        <div key={i}>
                            <a href={elem.deal.url} target="_blank"><h5>{elem.deal.short_title}</h5></a>
                            <a>
                                <img style={aStyle} src={elem.deal.image_url} alt="" />
                            </a>
                            <h5>{elem.deal.merchant.locality}, {elem.deal.merchant.region}</h5>

                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Deals;