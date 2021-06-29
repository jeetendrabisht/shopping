import React from 'react';
import { connect } from 'react-redux';
import { getProductsAPI,getCategory } from '../actions';
import "../scss/products.scss";

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchData();
        this.props.categoryCall();
    }

    render() {
        const { items, category } = this.props;
        return <div className="main-content-product">
            <div className="category">
            {category.map(categoryData => {
                    return <div key={categoryData.id}>
                        <h3>{categoryData.name}</h3>
                    </div>
                })} 
            </div>
            <div className="main-content-display">
                {items.map((item => {
                    return <div key={item.id}>
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