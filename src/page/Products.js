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

import withStyles from "@material-ui/core/styles/withStyles";
import { stylePageProducts } from './../style/PublicSite';
import { t } from './../service/TranslationService';
import { data } from './../service/DataService';
import ProductCard from '../component/ProductCard';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

class Products extends React.Component {
    state = {
        runAnimation: false
    };
    render() {
        const { classes } = this.props;
        const { runAnimation } = this.state;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography variant="h4" component="h3" gutterBottom align={'center'} className={classes.title}>{t.products.title}</Typography>
                    <Divider variant="middle" className={classes.divider}/>
                    <Typography variant="subtitle2" component="h6" gutterBottom>
                        Желаете <strong>купить туи, можжевельники или другие хвойные растения в Бресте</strong> для своего участка или территории? 
                        Тогда мы с радостью предложим вам широкий ассортимент туй для посадки. 
                        У нас отличные <strong>цены на саженцы туй в Бресте</strong> и выгодные предложения для оптовых покупателей.
                        Наличие и цены можно уточнить по телефону <Link color="secondary" href={t.contacts.phone}>{t.contacts.phoneLabel}</Link>,
                        а дополнительную контактную информацию можно посмотреть <NavLink to={'/page/contacts'} className={classes.navLink}>здесь</NavLink>.
                    </Typography>
                </Paper>
                <Grid container spacing={16} className={classes.grid}>{
                    data.map((product, key) => {
                        var multi;
                        if (key === 0) {
                            multi = 0;
                        } else if (key === 1) {
                            multi = Math.log(2) / 2;
                        } else {
                            multi = Math.log(key);
                        }
                        return (
                            <Grow in={runAnimation} style={{ transformOrigin: '0 0 0' }} 
                                    {...(runAnimation ? { timeout: 2000 * multi } : {})} key={key}>
                                <Grid item lg={3} md={4} sm={12} className={classes.item}>
                                    <ProductCard product={product} />
                                </Grid>
                            </Grow>
                        );
                    })
                }</Grid>
            </React.Fragment>
        );
    };
    componentDidMount() {
        document.title = t.title.products;
        this.setState({ runAnimation: true });
    }
};

export default withStyles(stylePageProducts)(Products);
