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
import green from '@material-ui/core/colors/green';
import lime from '@material-ui/core/colors/lime';
import background from "./../assets/img/background.jpg";

const toolbarHeight = 56;

export const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: lime
    },
    typography: {
        useNextVariants: true
    }
});

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
        height: toolbarHeight,
        minHeight: toolbarHeight,
        maxHeight: toolbarHeight
    },
    brand: {
        display: 'flex',
        alignItems: 'center'
    }
});