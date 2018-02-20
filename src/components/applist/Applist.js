import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardHeader, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Save from 'material-ui-icons/Save';
import FileDownload from 'material-ui-icons/FileDownload';
import './Applist.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    card: {
        maxWidth: 345
    },
    media: {
        height: 200
    },
    button: {
        margin: theme.spacing.unit
    },
    leftIcon: {
        marginRight: theme.spacing.unit
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    }
});

class Applist extends React.Component {

    constructor(props) {
        super(props)
        this.classes = styles
        this.applist = [];
    }

    componentDidMount() {
        const url = 'https://app.pagewerkz.com/api/downloadpage?lang=en';
        fetch(url, {
                method: 'GET',
                headers: new Headers({'api_key': 'f41530bce9a451c928a61af28a0bfd05', 'Content-Type': 'application/json'})
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                this.applist = response;
            });
    }

    render() {
        return (
            <div className="Applist-wrapper">
                <Grid container spacing={16} alignItems="center">
                    <Grid className="Applist-card" item xs={12} sm={6} md={3} lg={3}>
                        <Card className={this.classes.card}>
                            <CardHeader
                                className="Applist-header"
                                title="Get ANAVO for Windows Desktop"
                                subheader=""/>
                            <Divider/>
                            <CardContent className="Applist-content">
                                <Typography component="p">
                                    <p>
                                        <strong>Minimum System Requirements for Window</strong>
                                    </p>
                                    <p>- Intel Pentium Class Core 2 duo 3rd gen and above. AMD Bulldozer Core
                                        Microprocessor and above
                                    </p>
                                    <p>- Windows 7 or later. 32bit or 64 bit(older OS versions may work but are not
                                        officially supported)
                                    </p>
                                    <p>- Minimum 100 MB available disk space (for installation only)
                                    </p>
                                    <p>- Minimum resolution 1024 by 768</p>
                                    <p>
                                        <strong>Change Logs</strong>
                                    </p>
                                    <p>- Intel Pentium Class Core 2 duo 3rd gen and above. AMD Bulldozer Core
                                        Microprocessor and above
                                    </p>
                                    <p>- Windows 7 or later. 32bit or 64 bit(older OS versions may work but are not
                                        officially supported)
                                    </p>
                                    <p>- Minimum 100 MB available disk space (for installation only)
                                    </p>
                                    <p>- Minimum resolution 1024 by 768</p>
                                </Typography>
                            </CardContent>
                            <Divider/>
                            <CardActions>
                                <Grid container alignItems="center" direction="row" justify="center">
                                    <Button variant="raised" color="primary">
                                        <FileDownload className={this.classes.rightIcon}/>
                                        Download
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid className="Applist-card" item xs={12} sm={6} md={3} lg={3}>
                        <Card className={this.classes.card}>
                            <CardHeader
                                className="Applist-header"
                                title="Get ANAVO for Android Tablets"
                                subheader=""/>
                            <Divider/>
                            <CardContent className="Applist-content">
                                <Typography component="p">
                                    <p>
                                        <strong>Minimum System Requirements for Window</strong>
                                    </p>
                                    <p>- Android smartphone(2014 and newer).</p>
                                    <p>- Android 4.4 or later.(older OS versions may work but are not officially
                                        supported)</p>
                                    <p>- 20MB of storage for base installation + additional storage required for
                                        content</p>
                                    <p>- Phone:4.5 inch screen size and above Tablet: 8 inch screen size and above</p>
                                </Typography>
                            </CardContent>
                            <Divider/>
                            <CardActions>
                                <Grid container alignItems="center" direction="row" justify="center">
                                    <Button variant="raised" color="primary">
                                        <FileDownload className={this.classes.rightIcon}/>
                                        Download
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid className="Applist-card" item xs={12} sm={6} md={3} lg={3}>
                        <Card className={this.classes.card}>
                            <CardHeader className="Applist-header" title="Get ANAVO for OSX" subheader=""/>
                            <Divider/>
                            < CardContent className="Applist-content">
                                <Typography component="p">
                                    <p>
                                        <strong>Minimum System Requirements for Window</strong>
                                    </p>
                                    <p>- iMac, Macbook family (2012 and newer)</p>
                                    <p>- OSX 10.6 and above (older OS versions may work but are not officially
                                        supported)
                                    </p>
                                    <p>- Minimum 200 MB available disk space (for installation only)</p>
                                    <p>- Minimum resolution 1024 by 768</p>
                                </Typography>
                            </CardContent>
                            <Divider/>
                            <CardActions>
                                <Grid container alignItems="center" direction="row" justify="center">
                                    <Button variant="raised" color="primary">
                                        <FileDownload className={this.classes.rightIcon}/>
                                        Download
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid className="Applist-card" item xs={12} sm={6} md={3} lg={3}>
                        <Card className={this.classes.card}>
                            <CardHeader className="Applist-header" title="Get ANAVO for iPad" subheader=""/>
                            <Divider/>
                            <CardContent className="Applist-content">
                                <Typography component="p">
                                    <p>
                                        <strong>Minimum System Requirements for Window</strong>
                                    </p>
                                    <p>- iPhone 6. iPhone 6 plus & above. iPad family (3rd generation and above)
                                    </p>
                                    <p>- iOS 10 or later.(older OS versions may work but are not officially supported)
                                    </p>
                                    <p>- 20MB of storage for installation+ additional storage required for content</p>
                                    <p>- Phone: 4.7 inch screen size and above Tablet: 7.9 inch screen size and above</p>
                                </Typography>
                            </CardContent>
                            <Divider/>
                            <CardActions>
                                <Grid container alignItems="center" direction="row" justify="center">
                                    <Button variant="raised" color="primary">
                                        <FileDownload className={this.classes.rightIcon}/>
                                        Download
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

// export default Applist;
export default withStyles(styles)(Applist);