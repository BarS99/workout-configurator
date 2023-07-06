import * as React from 'react';

import {
    Card,
    CardHeader,
    CardContent,
    Collapse,
    IconButton,
    IconButtonProps,
    Typography,
    styled,
    Box,
    CardActions,
    Button
} from '@mui/material/';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

const HorizontalCard = (): JSX.Element => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (): void => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ p: 2 }}>
            <CardHeader
                sx={{ p: 0 }}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Push Pull Legs"
                subheader="September 14, 2016"
            />

            <CardActions>
                <Box component={Button} variant="text" size="small" onClick={handleExpandClick}>
                    <Typography variant="subtitle2">Show more</Typography>
                    <ExpandMore sx={{}} expand={expanded} aria-expanded={expanded} aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </Box>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default HorizontalCard;
