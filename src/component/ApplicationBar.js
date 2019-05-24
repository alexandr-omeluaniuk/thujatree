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
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import { styleApplicationBar } from './../style/PublicSite';
import menuBackground from "./../assets/img/background.jpg";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { t } from './../service/TranslationService';
import { routes } from './../routing/public-site';

class AplicationBar extends React.Component {
    render() {
        const { classes, mobileOpen, handleDrawerToggle } = this.props;
        var backImageWrapper = (<div className={classes.background} style={{ backgroundImage: "url('" + menuBackground + "')" }} />);
        let activeRoutes = routes().filter(route => this.activeRoute(route.path) && !route.redirect);
        let label = '';
        if (activeRoutes && activeRoutes.length === 1) {
            label = activeRoutes[0].sidebarName;
        }
        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.appBar}>
                    <Hidden smDown implementation="css">
                        <div className={classes.brand}>
                            <Icon color="inherit" className={classes.brandIcon}>local_florist</Icon>
                            <Typography variant="h5" color="inherit">
                                { t.brand }
                            </Typography>
                            {this.createButtons(routes())}
                        </div>
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        <div className={classes.brand}>
                            <IconButton color="inherit" onClick={handleDrawerToggle}>
                                <Icon>menu</Icon>
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                { label }
                            </Typography>
                        </div>
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        <Drawer variant="temporary" anchor="left" open={mobileOpen} onClose={handleDrawerToggle} classes={{
                            paper: classes.drawerPaper
                        }} ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}>
                            <div className={classes.sidebarWrapper}>
                                <Paper className={classes.mobileBrand} square={true}>
                                    <Icon color="inherit" className={classes.brandIcon}>local_florist</Icon>
                                    <Typography variant="h6" color="inherit">
                                        { t.brand }
                                    </Typography>
                                </Paper>
                                {this.createList(routes(), 0)}
                            </div>
                            {backImageWrapper}
                        </Drawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    };
    createButtons = (routes) => {
        const { classes } = this.props;
        return (
            <div className={classes.buttonsContainer}>{
                routes.map((prop, key) => {
                    if (prop.redirect) return null;
                    if (prop.excludeFromNavigation) return null;
                    let btnClasses = classNames({
                        [classes.button]: true,
                        [classes.buttonActive]: this.activeRoute(prop.path)
                    });
                    return (
                        <NavLink to={prop.path} activeClassName="active" key={key} className={classes.navLink}>
                            <Button className={btnClasses} variant={'outlined'} color="inherit">
                                <Icon className={classes.buttonIcon}>{prop.icon}</Icon> { prop.sidebarName }
                            </Button>
                        </NavLink>
                    );
                })
            }</div>
        );
    };
    createList = (listData, level) => {
        const { classes, handleDrawerToggle } = this.props;
        let shift = { marginLeft: (15 * level) + 15 };
        return (
            <List className={classes.list}>
                {
                    listData.map((prop, key) => {
                        if (prop.redirect) return null;
                        if (prop.excludeFromNavigation) return null;
                        var listItemClasses = classNames({
                            [" " + classes.selectedMenuItem]: this.activeRoute(prop.path)
                        });
                        if (prop.path) {
                            return (
                                <NavLink to={prop.path} className={classes.item} onClick={() => handleDrawerToggle()} key={key}>
                                    <ListItem button className={classes.itemLink + listItemClasses} style={shift}>
                                        <ListItemIcon className={classes.itemIcon}>
                                            {typeof prop.icon === "string" ? (<Icon>{prop.icon}</Icon>) : (<prop.icon />)}
                                        </ListItemIcon>
                                        <ListItemText primary={prop.sidebarName} className={classes.itemText} />
                                    </ListItem>
                                </NavLink>
                            );
                        } else {
                            let open = this.state.open;
                            let isOpen = true;
                            if (open[prop.sidebarName] === undefined) {
                                isOpen = true;
                            } else {
                                isOpen = open[prop.sidebarName];
                            }
                            let nextLevel = level + 1;
                            return (
                                <div key={key}>    
                                <ListItem button className={classes.itemLink} onClick={() => this.handleCollapse(prop)} style={shift}>
                                    <ListItemIcon className={classes.itemIcon}>
                                        {typeof prop.icon === "string" ? (<Icon>{prop.icon}</Icon>) : (<prop.icon />)}
                                    </ListItemIcon>
                                    <ListItemText className={classes.itemText}>
                                        {prop.sidebarName}
                                        <Icon fontSize="small">{isOpen ? 'expand_less' : 'expand_more'}</Icon>
                                    </ListItemText>
                                </ListItem>
                                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                    {this.createList(prop.children, nextLevel)}
                                </Collapse>
                                </div>
                            );
                        }
                    })
                }
            </List>
        );
    };
    activeRoute = (routeName) => {
        return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    };
};

export default withStyles(styleApplicationBar)(AplicationBar);