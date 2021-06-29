import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI, getCategory } from '../actions';
import "../scss/home.scss";

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchData();
        this.props.categoryCall();
    }

    render() {
        return <div className="main-content-home">
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryCall: () => dispatch(getCategory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);