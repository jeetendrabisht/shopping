import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { getCategory, getBannerCall } from '../actions';
import "../scss/home.scss";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
        this.onClickExp = this.onClickExp.bind(this);
    }

    componentDidMount() {
        this.props.categoryCall();
        this.props.bannerCall();
    }

    onClickExp() {
        this.setState({flag : true});
    }

    render() {
        const { category, banner } = this.props;
        const { flag } = this.state;
        return <div className="main-content-home">
            <div className="content-carousal">
                <AwesomeSlider>
                    {banner.map(bannerData => {
                        return <div className="content-carousal-main" key={bannerData.id}>
                            <img src={"../../" + bannerData.bannerImageUrl} alt={bannerData.bannerImageAlt} />
                        </div>
                    })}
                </AwesomeSlider>
            </div>
            <div className="home-display">
                {category.map((categoryData, keyMapData) => {
                    return <div className={((keyMapData % 2 === 0) ? "extra-content-alignment " : '') + "home-category"} key={categoryData.id}>
                        <div className=" content-category-oneSide">
                            <h2>{categoryData.name}</h2>
                            <p>{categoryData.description}</p>
                            <button type="button" onClick={this.onClickExp}>Explore {categoryData.key}</button>
                            {flag && <Redirect to={'/products/'+ categoryData.id}/>}
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