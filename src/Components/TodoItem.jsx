import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function TodoItem(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <>
            <div>
                lol
            </div>
        </>
    );
}

export default TodoItem;
        // {/*<ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>*/}
        // {/*    <ListItemIcon>*/}
        // {/*        <Checkbox*/}
        // {/*            edge="start"*/}
        // {/*            checked={checked.indexOf(value) !== -1}*/}
        // {/*            tabIndex={-1}*/}
        // {/*            disableRipple*/}
        // {/*            inputProps={{ 'aria-labelledby': labelId }}*/}
        // {/*        />*/}
        // {/*    </ListItemIcon>*/}
        // {/*    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />*/}
        // {/*    <ListItemSecondaryAction>*/}
        // {/*        <IconButton edge="end" aria-label="comments">*/}
        // {/*            <CommentIcon />*/}
        // {/*        </IconButton>*/}
        // {/*    </ListItemSecondaryAction>*/}
        // {/*</ListItem>*/}
