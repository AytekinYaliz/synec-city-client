import {
    Switch,
    Route
} from "react-router-dom";

import { ListCities } from '../../pages/cities/ListCities';
import { PageNotFound } from '../../pages/404/PageNotFound';

export const BodyRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                HOME
            </Route>
            <Route path="/cities">
                <ListCities />
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    );
}