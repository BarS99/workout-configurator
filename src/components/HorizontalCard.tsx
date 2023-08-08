import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Card, CardContent, Collapse, Typography, Box, CardActions, Button } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CrudPopover from './CrudPopover';

import { Link } from 'react-router-dom';
import { deletePlan } from '../store/reducers/trainingPlanReducer';
import { TrainingPlan } from '../types/training-plan';

const HorizontalCard = (props: TrainingPlan): JSX.Element => {
    const { id, name, desc, days } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = (): void => {
        setExpanded(!expanded);
    };

    const handleEdit = (): void => {};

    const handleDelete = (): void => {
        dispatch(deletePlan(props));
    };

    const cardStyle = {
        p: 2,
        mb: 2
    };
    const cardHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    };
    const cardTitleStyle = {
        p: 1,
        '  &:hover': { backgroundColor: '#eee', cursor: 'pointer', borderRadius: '5px' }
    };

    return (
        <Card sx={cardStyle}>
            <Box sx={cardHeaderStyle}>
                <Link to={'/creator/' + id}>
                    <Typography variant="h5" sx={cardTitleStyle}>
                        {name}
                    </Typography>
                </Link>
                <Box>
                    <CrudPopover handleEdit={handleEdit} handleDelete={handleDelete} />
                </Box>
            </Box>

            <CardActions>
                <Box component={Button} variant="text" size="small" onClick={handleExpandClick}>
                    <Typography variant="subtitle2">{t('common.showMore')}</Typography>
                    <ExpandMoreIcon
                        style={{
                            zIndex: '10',
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
