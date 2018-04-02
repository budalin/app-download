import React from 'react';
import {withStyles} from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
// import Icon from 'material-ui/Icon';
// import Save from 'material-ui-icons/Save';
import FileDownload from 'material-ui-icons/FileDownload';
import './Applist.css';

const ReactMarkdown = require('react-markdown');

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
        this.state = {
            applist: []
        }
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
                this.setState({applist: response})
            });
    }

    checkTitle = (title) => {
        console.log(title)
        if (title === 'win') {
            return 'Window'
        } else if (title === 'android') {
            return 'Android'
        } else if (title === 'mac') {
            return 'Mac'
        } else if (title === 'ios') {
            return 'Ios'
        }
    }

    checkVersion = (version) => {
        return 'Version : ' + version
    }

    render() {

        const content = this
            .state
            .applist
            .map((app, index) => <Grid key={index} className="Applist-card" item xs={12} sm={6} md={3} lg={3}>
                <Card className={this.classes.card}>
                    <CardHeader
                        className="Applist-header"
                        title={this.checkTitle(app.os)}
                        subheader={this.checkVersion(app.version)}/>
                    <Divider/>
                    <CardContent className="Applist-content">
                        <Typography>
                            <p className="Applist-title">
                                {app.requirement
                                        ? app.requirement.title
                                        : ''}
                            </p>
                            <p>
                                {app.requirement
                                    ? <ReactMarkdown source={app.requirement.description}/>
                                    : ''}
                            </p>
                            <p className="Applist-title">
                                Change Logs
                            </p>
                            <p>
                                <ReactMarkdown source={app.changelog}/>
                            </p>
                        </Typography>
                    </CardContent>
                    <Divider/>
                    <CardActions>
                        <Grid container alignItems="center" direction="row" justify="center">
                            <Button variant="raised" color="primary" href={app.url}>
                                <FileDownload className={this.classes.rightIcon}/>
                                Download App
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>);
        return (
            <div className="Applist-wrapper">
                <Grid container spacing={16} alignItems="center">
                    {content}
                </Grid>
            </div>
        )
    }
}

// export default Applist;
export default withStyles(styles)(Applist);