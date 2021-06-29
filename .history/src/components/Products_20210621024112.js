import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI } from '../actions';
import "../scss/products.scss";
import * as myConst from '../common/constants';

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchData(myConst.PRODUCTS_API);
    }

    render() {
        const { items } = this.props;
        console.log("Items are  ", this.props);
        return <div className="main-content-product">
            <div className="category">Category</div>
            <div className="main-content-display">Items</div>
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