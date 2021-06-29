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
            <div className="main-content-display">{items[0]}</div>
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