import React, { Component } from 'react';
import SearchProperty from '../../components/SearchProperty/SearchProperty';

class Content extends Component {
    render() {
        return (
            <div>
                Main Content comes over
                <SearchProperty />
            </div>
        );
    }
}

export default Content;