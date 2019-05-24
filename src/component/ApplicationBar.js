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

import withStyles from "@material-ui/core/styles/withStyles";
import { styleApplicationBar } from './../style/PublicSite';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

class AplicationBar extends React.Component {
    render() {
        const { classes, mobileOpen, handleDrawerToggle } = this.props;
        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.appBar}>
                    <Hidden smDown implementation="css">
                        <div className={classes.brand}>
                            <Icon color="inherit">local_florist</Icon>
                            <Typography variant="h6">
                                Local florist
                            </Typography>
                        </div>
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        <Drawer variant="temporary" anchor="right" open={mobileOpen} onClose={handleDrawerToggle} classes={{
                            paper: classes.drawerPaper
                        }} ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}>
                            
                        </Drawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
};

export default withStyles(styleApplicationBar)(AplicationBar);