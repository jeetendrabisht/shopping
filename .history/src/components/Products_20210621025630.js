import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI } from '../actions';
import "../scss/products.scss";

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { items } = this.props;
        console.log("Items are  ", this.props);
        return <div className="main-content-product">
            <div className="category">Category</div>
            <div className="main-content-display">
                {items.map((item, key) => {
                    return <div>
                        <h3>{item.name}</h3>
                        {item.imageURL}
                        <p>{item.description}</p>
                        <div>
                            <p>MRP Rs.{item.price}</p>
                            <button type="button">Buy Now</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasError: state.itemsHaveError,
        isLoading: state.itemsAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getProductsAPI(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);