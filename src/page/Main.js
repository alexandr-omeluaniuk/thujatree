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
import { t } from './../service/TranslationService';
import { stylePageMain } from '../style/PublicSite';

import Paper from '@material-ui/core/Paper';
import Hidden from "@material-ui/core/Hidden";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Divider from '@material-ui/core/Divider';

class Main extends React.Component {
    render() {
        const { classes } = this.props;
        return (
                <Paper className={classes.root}>
                    <Grid container spacing={32}>
                        <Grid item lg={6} md={6} sm={12}>
                            <Typography variant="h4" component="h3" gutterBottom>{t.main.title}</Typography>
                            <Typography variant="h6" component="h6" gutterBottom>{t.main.subtitle1}</Typography>
                            <Typography>{t.main.text1}</Typography>
                            <Hidden mdUp implementation="css">
                                <GridList cols={1} cellHeight={150}>
                                    <GridListTile cols={1}>
                                        <img src={'/slide_3/1.jpg'} alt={t.main.altImg} />
                                    </GridListTile>
                                    <GridListTile cols={1}>
                                        <img src={'/slide_3/2.jpg'} alt={t.main.altImg} />
                                    </GridListTile>
                                    <GridListTile cols={1}>
                                        <img src={'/slide_3/4.jpg'} alt={t.main.altImg} />
                                    </GridListTile>
                                </GridList>
                            </Hidden>
                            <Divider variant="middle" className={classes.divider}/>
                            <Typography variant="h6" component="h6" gutterBottom>{t.main.subtitle2}</Typography>
                            <Typography>{t.main.text2}</Typography>
                            <Hidden mdUp implementation="css">
                                <GridList cols={1} cellHeight={200}>
                                    <GridListTile cols={1}>
                                        <img src={'/slide_3/5.jpg'} alt={t.main.altImg} />
                                    </GridListTile>
                                    <GridListTile cols={1}>
                                        <img src={'/slide_3/6.jpg'} alt={t.main.altImg} />
                                    </GridListTile>
                                    <GridListTile cols={1}>
                                        <img src={'/slide_3/7.jpg'} alt={t.main.altImg} />
                                    </GridListTile>
                                </GridList>
                            </Hidden>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <Paper elevation={3}>
                                <Hidden smDown implementation="css">
                                    <GridList cols={3} cellHeight={300}>
                                        <GridListTile cols={1}>
                                            <img src={'/slide_3/3.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={2}>
                                            <img src={'/slide_3/1.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={2}>
                                            <img src={'/slide_3/2.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={1}>
                                            <img src={'/slide_3/4.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={1}>
                                            <img src={'/slide_3/5.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={2}>
                                            <img src={'/slide_3/6.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={2}>
                                            <img src={'/slide_3/8.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={1}>
                                            <img src={'/slide_3/7.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={1}>
                                            <img src={'/slide_3/9.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                        <GridListTile cols={2}>
                                            <img src={'/slide_3/10.jpg'} alt={t.main.altImg} />
                                        </GridListTile>
                                    </GridList>
                                </Hidden>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
        );
    }
    componentDidMount() {
        document.title = t.title.main;
    }
};

export default withStyles(stylePageMain)(Main);
