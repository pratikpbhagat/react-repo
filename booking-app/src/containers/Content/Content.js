import React, { Component } from 'react';
import SearchProperty from '../../components/SearchProperty/SearchProperty';
import { Route, Switch } from 'react-router-dom';
import CarRentals from '../../components/CarRentals/CarRentals';
import Deals from '../../components/Deals/Deals';
import Wishlist from '../../components/Wishlist/Wishlist';

class Content extends Component {
    render() {
        return (
            <div>
                <p>COVID Support</p>
                <Switch>
                    <Route path="/deals" component={Deals} />
                    <Route path="/car-rentals" component={CarRentals} />
                    <Route path="/wishlist">
                        <Wishlist />
                    </Route>
                    <Route path="/" exact component={SearchProperty} />
                </Switch>
            </div>
        );
    }
}

export default Content;