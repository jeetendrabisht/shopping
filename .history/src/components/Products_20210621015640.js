import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI } from '../actions';
import * as myConst from '../common/constants';
import "../scss/products.scss";

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchData(myConst.PRODUCTS_API);
    }

    render() {
        return <div className="main-content-product">
            <div className="category">Category</div>
            <div className="main-content-display">Items</div>
        </div>
    }
}

const mapStateToProps = (state) => {
    debugger;
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