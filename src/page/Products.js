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
import { stylePageProducts } from './../style/PublicSite';
import { t } from './../service/TranslationService';
import { data } from './../service/DataService';
import ProductCard from '../component/ProductCard';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class Products extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography variant="h4" component="h3" gutterBottom>{t.products.title}</Typography>
                    <Divider variant="middle" />
                    <Typography variant="subtitle2" component="h6" gutterBottom>
                        Желаете <strong>купить туи в Бресте</strong> для своего участка или территории? 
                        Тогда мы с радостью предложим вам широкий ассортимент туй для посадки. 
                        У нас отличные <strong>цены на саженцы туй в Бресте</strong> и выгодные предложения для оптовых покупателей.
                        Наличие и цены можно уточнить по телефону <Link color="secondary" href={t.contacts.phone}>{t.contacts.phoneLabel}</Link>,
                        а дополнительную контактную информацию можно посмотреть <Link color="secondary" href={'/page/contacts'}>здесь</Link>
                    </Typography>
                </Paper>
                <Grid container spacing={16} className={classes.grid}>{
                    data.map((product, key) => {
                        return (
                            <Grid item lg={3} md={3} sm={12} key={key} className={classes.item}>
                                <ProductCard product={product} />
                            </Grid>
                        );
                    })
                }</Grid>
            </React.Fragment>
        );
    };
    componentDidMount() {
        document.title = t.title.products;
    }
};

export default withStyles(stylePageProducts)(Products);
