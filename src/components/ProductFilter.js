import React from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../actions/filterActions';

class ProductFilter extends React.Component {
    
    render() {
        return (
            <div style={{ marginBottom: 15 }}>
               

                sorted By:
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        this.props.dispatch(sortBy(e.target.value));
                    }}>
                    <option value='none'>---</option>
                    <option value='precio'>Precio</option>
                    <option value='nombre'>Nombre</option>
                </select>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ProductFilter);

