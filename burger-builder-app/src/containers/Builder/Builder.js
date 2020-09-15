import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class Builder extends Component {
    render() {
        return (
            <Auxillary>
                <Burger />
                <div>Build Controls</div>
            </Auxillary>
        );
    }
}

export default Builder;