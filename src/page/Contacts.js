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
import L from 'leaflet'
import '../../node_modules/leaflet/dist/leaflet.css';

import withStyles from "@material-ui/core/styles/withStyles";
import { stylePageContacts } from './../style/PublicSite';
import { t } from './../service/TranslationService';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

class Contacts extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Typography variant="h4" component="h3" gutterBottom>{t.contacts.title}</Typography>
                <Typography variant="h6" component="h6" gutterBottom>{t.contacts.subtitle}</Typography>
                <Divider variant="middle" />
                <Typography variant="h6" gutterBottom className={classes.paragraph}>
                    <i className="fas fa-clock"></i> {t.contacts.workingHoursLabel}: {t.contacts.workingHours}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <Link color="secondary" href={t.contacts.phone} className={classes.link}>
                        <i className={'fas fa-phone fa-lg'}></i> {t.contacts.phoneLabel}</Link>
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <Link color="secondary" href={t.contacts.vk} className={classes.link} target="_blank" rel="noopener">
                        <i className={'fab fa-vk fa-lg'}></i> {t.contacts.vkLabel}</Link>
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <Link color="secondary" href={t.contacts.instagram} className={classes.link} target="_blank" rel="noopener">
                        <i className={'fab fa-instagram fa-lg'}></i> {t.contacts.instagramLabel}</Link>
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.paragraph}>
                    <i className="fas fa-map-marker-alt"></i> {t.contacts.addressLabel}: {t.contacts.address}
                </Typography>
                <Divider variant="middle" />
                <Paper elevation={5} id="map" className={classes.map}></Paper>
            </Paper>
        );
    };
    componentDidMount() {
        document.title = t.title.contacts;
        var map = L.map('map', {
            zoomControl: false,
            maxBounds: [[52.1884, 23.5702], [52.0793, 23.8711]],
            minZoom: 11
        }).setView([52.12422, 23.70544], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var icon = L.icon({
            iconUrl: '/garden.png',
            iconSize:     [32, 37], // size of the icon
            iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
        });
        L.marker([52.1243, 23.7058],{icon: icon}).addTo(map)
            .bindPopup(t.contacts.here).openPopup();
    }
};

export default withStyles(stylePageContacts)(Contacts);
