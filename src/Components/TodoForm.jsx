import React from 'react';
import {loadCSS} from 'fg-loadcss';
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Button from "@material-ui/core/Button";
import {ThemeProvider} from '@material-ui/styles';
import {green} from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        flex: '.90',
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '100%'
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        // width: 200,
    },
    saveButton: {
        flex: '.08',
        width:'100%',
        marginTop: '6px',
        marginLeft:'2%',
        padding: '1em 2em',
    },
    icon: {
        color: 'white',
    }
}));


function TodoForm(props) {
    const classes = useStyles();

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    const [task, setTask] = React.useState(props.todo.task);

    function handleChange(event) {
        setTask(event.target.value);
    }

    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });

    function handleSave() {
        let toSendObj = {...props.todo,task:task};
        delete toSendObj.isEditOn;
        props.editItem(toSendObj);
    }

    return (
        <ListItem className={classes.container}>
            <TextField
                id="filled-name"
                label="Name"
                className={classes.textField}
                value={task}
                onChange={handleChange}
                margin="normal"
                variant="filled"
            />
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className={classes.saveButton} onClick={handleSave}>
                        <Icon className={clsx(classes.icon, 'fas fa-save')} color="action"/>
                    </Button>
                </ThemeProvider>
        </ListItem>
    );
}

export default TodoForm;