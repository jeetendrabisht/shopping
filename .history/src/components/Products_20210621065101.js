import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI,getCategory } from '../actions';
import "../scss/products.scss";
import img from "../static/images/products/fruit-n-veg/kiwi-green.jpg";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.onClickCategory = this.onClickCategory.bind(this);
    }

    componentDidMount() {
        this.props.fetchData();
        this.props.categoryCall();
    }

    onClickCategory(categoryId) {
        debugger
    }

    render() {
        const { items, category } = this.props;
        return <div className="main-content-product">
            <div className="category">
            {category.map(categoryData => {
                    return <div className="products-category" key={categoryData.id}>
                        <button onClick={() => this.onClickCategory(categoryData.id)}>{categoryData.name}</button>
                    </div>
                })} 
            </div>
            <div className="main-content-display">
                {items.map(item => {
                    return <div className="products-data" key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={img} alt="product_image" />
                        <p>{item.description}</p>
                        <div className="price-buy-button">
                            <span>MRP Rs.{item.price}</span>
                            <button type="button">Buy Now</button>
                        </div>
                        <hr className="hr-data" />
                    </div>
                })}
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