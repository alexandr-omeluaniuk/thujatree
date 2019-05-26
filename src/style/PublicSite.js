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

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import background from "./../assets/img/background.jpg";

const mobileMenuWidth = 280;
const toolbarMobile = 56;
const toolbarDesktop = 64;

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

export const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: pink
    },
    typography: {
        useNextVariants: true
    }
});
theme.palette.secondary.main = theme.palette.secondary[300];
//console.log(theme);
export const stylePublicSite = theme => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh",
        overflowY: 'hidden',
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: '#131313',
            opacity: ".4"
        }
    },
    mainPanel: {
        overflowY: "auto",
        position: "relative",
        float: "right",
        ...transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch",
        zIndex: '4',
        [theme.breakpoints.up("md")]: {
            height: `calc(100vh - ${toolbarDesktop}px)`
        },
        [theme.breakpoints.down("sm")]: {
            height: `calc(100vh - ${toolbarMobile}px)`
        }
    },
    content: {
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing.unit * 2,
            minHeight: `calc(100vh - ${toolbarDesktop}px)`
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing.unit,
            minHeight: `calc(100vh - ${toolbarMobile}px)`
        }
    }
});

export const styleApplicationBar = theme => ({
    appBar: {
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        '& h5': {
            marginLeft: theme.spacing.unit
        },
        '& h6': {
            marginLeft: theme.spacing.unit
        }
    },
    drawerPaper: {
        border: "none",
        position: "fixed",
        bottom: "0",
        width: mobileMenuWidth,
        display: "block",
        top: "0",
        height: "100vh",
        left: "0",
        right: "auto",
        zIndex: "1032",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingLeft: "0px",
        paddingRight: "0",
        transform: `translate3d(${mobileMenuWidth}px, 0, 0)`
    },
    background: {
        position: "absolute",
        zIndex: "1",
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: '#131313',
            opacity: ".4"
        }
    },
    button: {
        margin: theme.spacing.unit,
        color: theme.palette.white,
        border: '1px solid ' + theme.palette.primary.main
    },
    buttonIcon: {
        marginRight: theme.spacing.unit
    },
    buttonActive: {
        border: '1px solid rgba(255, 255, 255, 0.53)'
    },
    buttonsContainer: {
        marginLeft: '10px',
        borderLeft: '1px solid #ffffff6e',
        paddingLeft: '10px',
        flexGrow: 1
    },
    navLink: {
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    brandIcon: {
        fontSize: 32,
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    list: {
        marginTop: "20px",
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none",
        position: "unset"
    },
    selectedMenuItem: {
        backgroundColor: theme.palette.secondary.main + '!important',
        boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(90, 90, 90, 0.67)",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main + '!important',
            boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(90, 90, 90, 0.67)"
        }
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: "#FFFFFF"
        }
    },
    itemLink: {
        "&:hover": {
            backgroundColor: "#ffffff30"
        },
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 0px 0px 0px !important",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "transparent"
    },
    itemIcon: {
        width: "24px",
        height: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    itemText: {
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        '& span': {
            color: theme.palette.getContrastText(theme.palette.primary.main)
        }
    },
    sidebarWrapper: {
        position: "relative",
        height: "calc(100vh - 75px)",
        overflow: "auto",
        width: `${mobileMenuWidth}px`,
        zIndex: "4",
        overflowScrolling: "touch"
    },
    mobileBrand: {
        display: 'flex',
        alignItems: 'center',
        '& h6': {
            marginLeft: theme.spacing.unit
        },
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        padding: theme.spacing.unit * 1.5
    }
});

const root = {
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing.unit * 2
    },
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing.unit * 2
    },
    opacity: '.9'
};

export const stylePageContacts = theme => ({
    root: root,
    link: {
        marginLeft: theme.spacing.unit * 2,
        '& i': {
            minWidth: 40
        }
    },
    map: {
        marginTop: theme.spacing.unit * 2,
        minHeight: 600,
        height: 600
    }
});