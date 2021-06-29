import React from 'react';
import { connect } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { getCategory, getBannerCall } from '../actions';
import "../scss/home.scss";

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
            <div className="content-carousal">
                <AwesomeSlider>
                    {banner.map(bannerData => {
                        return <div className="content-carousal-main">
                            <img src={"../../" + bannerData.bannerImageUrl} alt={bannerData.bannerImageAlt} />
                        </div>
                    })}
                </AwesomeSlider>
            </div>
            <div className="home-display">
                {category.map((categoryData, keyMapData) => {
                    return <div className="home-category" key={categoryData.id}>
                        <div className={((keyMapData % 2 === 0) ? "extra-content-alignment" : " ") + " content-category-oneSide"}>
                            <h2>{categoryData.name}</h2>
                            <p>{categoryData.description}</p>
                            <button type="button">Explore {categoryData.key}</button>
                        </div>
                        <div className="content-category-secondSide">
                            <center>
                                <img src={"../../" + categoryData.imageUrl} alt={categoryData.imageUrl ? "category_image" : ""} />
                            </center>
                        </div>
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