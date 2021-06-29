import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI, getCategory } from '../actions';
import "../scss/home.scss";

class Home extends React.Component {
    render() {
        return <div className="main-content-home">
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        category: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(getProductsAPI()),
        categoryCall: () => dispatch(getCategory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);