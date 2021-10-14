import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'


const App = () => {
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/" component={Home} />
                {/* <Route component={Notfound} /> */}
            </Switch>    
        </BrowserRouter>
    
    )
}


export default App;