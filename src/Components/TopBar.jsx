import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function TopBar(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href={''}>*/}
                        {/*    <MenuIcon/>*/}
                        {/*</IconButton>*/}
                        <Typography variant="h6" className={classes.title}>
                            Todo List on React Hooks
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default TopBar;