import React from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../actions';
import "../scss/home.scss";
import img from "../static/images/category/fruits.png";

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchData();
        this.props.categoryCall();
    }

    render() {
        const { category } = this.props;
        return <div className="main-content-home">
            <div className="content-carousal"></div>
            <div className="home-display">
                {category.map(categoryData => {
                    return <div className="home-category" key={categoryData.id}>
                        <h4>{categoryData.name}</h4>
                        <p>{categoryData.description}</p>
                        <button type="button">Explore {categoryData.key}</button>
                        <img src={img} alt="product_image" />
                    </div>
                })}
            </div>
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