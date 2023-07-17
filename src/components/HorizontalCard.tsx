import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deletePlan } from '../store/reducers/trainingPlanReducer';

import { Card, CardHeader, CardContent, Collapse, Typography, Box, CardActions, Button } from '@mui/material/';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useTranslation } from 'react-i18next';
import CrudPopover from './CrudPopover';
import { TrainingPlan } from '../types/training-plan';

const HorizontalCard = (props: TrainingPlan): JSX.Element => {
    const { id, name, desc, days } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (): void => {
        setExpanded(!expanded);
    };

    const handleEdit = (): void => {};
    const handleRename = (): void => {};
    // const handleDelete = (event: React.MouseEvent<unknown>, id: string): void => {
    //     dispatch(deletePlan(id));
    // };
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
                title={name}
                subheader=""
            />

            <CardActions>
                <Box component={Button} variant="text" size="small" onClick={handleExpandClick}>
                    <Typography variant="subtitle2">{t('common.showMore')}</Typography>
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
                    <Typography>{desc}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default HorizontalCard;
