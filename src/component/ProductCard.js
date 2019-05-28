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

import { withStyles } from '@material-ui/core/styles';
import { styleProductCard } from './../style/PublicSite';
import classnames from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';

class ProductCard extends React.Component {
    state = {
        expanded: false,
        activeStep: 0
    };
    handleNext = () => {
        this.setState({ activeStep: this.state.activeStep + 1 });
    };
    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 });
    };
    render() {
        const { expanded, activeStep } = this.state;
        const { classes, product } = this.props;
        return(
            <Card className={classes.card}>
                <CardHeader title={product.name} subheader={product.title} avatar={
                    <Avatar>
                        {product.name.substring(0, 1)}
                    </Avatar>
                } 
                />
                <CardMedia image={'/data/' + product.id + '/' + product.images[activeStep] + '.jpg'} title={product.title} className={classes.media}>
                    {product.images.length < 2 ? null : 
                        <MobileStepper variant="dots" steps={product.images.length} position="static" activeStep={activeStep} className={classes.stepper}
                        nextButton={
                            (activeStep === product.images.length - 1 ? null : 
                                <IconButton onClick={this.handleNext} className={classes.stepperRight}>
                                    <Icon>arrow_right</Icon>
                                </IconButton>)
                        }
                        backButton={
                            (activeStep === 0 ? null : 
                                <IconButton onClick={this.handleBack} className={classes.stepperLeft}>
                                    <Icon>arrow_left</Icon>
                                </IconButton>)
                        }/>
                    }
                </CardMedia>
                <CardActions className={classes.actions}>
                    <p className={classes.shortDesc}>{!expanded ? product.description : 'Полное описание:'}</p>
                    <IconButton className={classnames(classes.expand, {
                        [classes.expandOpen]: expanded,
                        [classes.hidden]: !product.description
                    })} onClick={this.handleExpandClick} aria-expanded={expanded} aria-label="Show more">
                        <Icon>expand_more</Icon>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {product.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    };
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
};

export default withStyles(styleProductCard)(ProductCard)
