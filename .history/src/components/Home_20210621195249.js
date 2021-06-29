import React from 'react';
import { connect } from 'react-redux';
import { getCategory, getBannerCall } from '../actions';
import "../scss/home.scss";
// import img from "../static/images/category/fruits.png";

class Home extends React.Component {

    componentDidMount() {
        this.props.categoryCall();
        this.props.bannerCall();
    }

    render() {
        const { category, banner } = this.props;
        console.log("Category  ", category);
        console.log("Banner  ", banner);
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
        category: state.category,
        banner: state.banner
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryCall: () => dispatch(getCategory()),
        bannerCall: () => dispatch(getBannerCall()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);