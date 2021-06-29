import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI, getCategory } from '../actions';
import "../scss/products.scss";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            flag: false,
            homeCategoryId: null

        }
        this.onClickCategory = this.onClickCategory.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchData();
        this.props.categoryCall();
        this.setState({
            homeCategoryId: this.props.match.params.id
        })
    }

    onClickCategory(categoryId) {
        const { items } = this.props;
        let filterData = items.filter(item => item.category === categoryId);
        this.setState({ filteredData: filterData, flag: true });
    }

    filtering(item) {
        return <div className="products-data" key={item.id}>
            <h4>{item.name}</h4>
            <img src={"../../" + item.imageURL} alt="product_image" />
            <p>{item.description}</p>
            <div className="price-buy-button">
                <span>MRP Rs.{item.price}</span>
                <button type="button">Buy Now</button>
            </div>
            <hr className="hr-data" />
        </div>
    }

    render() {
        const { items, category } = this.props;
        const { flag, filteredData } = this.state;
        return <div className="main-content-product">
            <div className="category">
                {category.map(categoryData => {
                    return <div className="products-category" key={categoryData.id}>
                        <button onClick={() => this.onClickCategory(categoryData.id)}>{categoryData.name}</button>
                    </div>
                })}
            </div>
            {this.props.match.params.id && this.onClickCategory(this.props.match.params.id)}
            <div className="main-content-display">
                {flag ? filteredData.map(item => this.filtering(item)) : items.map(item => this.filtering(item))}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);