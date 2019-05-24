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
import green from '@material-ui/core/colors/lightGreen';
import background from "./../assets/img/background.jpg";

//const toolbarHeight = 56;
const mobileMenuWidth = 280;

export const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});
theme.palette.primary.main = green[700];

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
            background: 'white',
            opacity: ".5"
        }
    }
});

export const styleApplicationBar = theme => ({
    appBar: {
//        [theme.breakpoints.down("sm")]: {
//            height: toolbarHeight,
//            minHeight: toolbarHeight,
//            maxHeight: toolbarHeight
//        }
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        '& h5': {
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
            background: '#9e9e9e',
            opacity: ".4"
        }
    }
});