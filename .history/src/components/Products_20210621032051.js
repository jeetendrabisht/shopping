import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI,getCategory } from '../actions';
import "../scss/products.scss";

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchData();
        this.props.category();
    }

    render() {
        const { items, category } = this.props;
        console.log("Items are  ", this.props);
        return <div className="main-content-product">
            <div className="category">
            {/* {category.map((categoryData, key) => {
                    return <div>
                        <h3>{categoryData.name}</h3>
                    </div>
                })}  */}
            </div>
            <div className="main-content-display">
                {items.map((item, key) => {
                    return <div>
                        <h3>{item.name}</h3>
                        <img src={item.imageURL} alt="product_image" />
                        <p>{item.description}</p>
                        <div>
                            <p>MRP Rs.{item.price}</p>
                            <button type="button">Buy Now</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log('state  is  ', state);
    return {
        items: state.items,
        category: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getProductsAPI(url)),
        category: (url) => dispatch(getCategory(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);