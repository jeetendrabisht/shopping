import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI } from '../actions';
import * as myConst from '../common/constants';
import "../scss/products.scss";
import { products } from "../../server/products/index.get";

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchData(products);
    }

    render() {
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
        searchData: state.searchCharacter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getProductsAPI(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);