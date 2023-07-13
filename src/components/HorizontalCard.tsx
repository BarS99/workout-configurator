import * as React from 'react';

import { Card, CardHeader, CardContent, Collapse, Typography, Box, CardActions, Button } from '@mui/material/';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useTranslation } from 'react-i18next';
import CrudPopover from './CrudPopover';

const HorizontalCard = (): JSX.Element => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (): void => {
        setExpanded(!expanded);
    };

    const handleEdit = (): void => {};
    const handleRename = (): void => {};
    const handleDelete = (): void => {};

    return (
        <Card sx={{ p: 2, mb: 2 }}>
            <CardHeader
                sx={{ p: 0 }}
                action={
                    <Box>
                        <CrudPopover handleEdit={handleEdit} handleRename={handleRename} handleDelete={handleDelete} />
                    </Box>
                }
                title="Push Pull Legs"
                subheader="September 14, 2016"
            />

            <CardActions>
                <Box component={Button} variant="text" size="small" onClick={handleExpandClick}>
                    <Typography variant="subtitle2">{t('show more')}</Typography>
                    <ExpandMoreIcon
                        style={{
                            color: 'black',
                            display: 'flex',
                            transform: `rotate(${expanded ? '180' : '0'}deg)`,
                            transition: 'transform 0.3s ease'
                        }}
                    />
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
