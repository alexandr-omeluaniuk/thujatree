/* 
 * The MIT License
 *
 * Copyright 2019 ss.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme, stylePublicSite } from './../style/PublicSite';
import withStyles from "@material-ui/core/styles/withStyles";

import AppBar from './../component/ApplicationBar';
import { approutes } from './../routing/public-site';

class PublicSite extends React.Component {
    state = {
        mobileOpen: false
    }
    render() {
        const { mobileOpen } = this.state;
        const { classes, location } = this.props;
        return (
                <MuiThemeProvider theme={theme}>
                    <div className={classes.wrapper}>
                        <AppBar mobileOpen={mobileOpen} handleDrawerToggle={this.handleDrawerToggle} location={location}></AppBar>
                        <div className={classes.mainPanel}>
                            <div className={classes.content}>
                                <Switch>{ this.createRoutes(approutes, 0) }</Switch>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
        );
    };
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    createRoutes = (routes, level) => {
        var arr = [];
        var startKey = (1000 * level) + 1;
        for (let prop of routes) {
            var currentKey = startKey++;
            if (!prop.path) {
                let nextLevel = level + 1;
                let childs = this.createRoutes(prop.children, nextLevel);
                for (let child of childs) {
                    arr.push(child);
                }
            } else if (prop.redirect) {
                arr.push(<Redirect from={prop.path} to={prop.to} key={currentKey} />);
            } else {
                arr.push(<Route path={prop.path} component={prop.component} key={currentKey}/>);
            }
        }
        return arr;
    };
};

export default withStyles(stylePublicSite)(PublicSite);
