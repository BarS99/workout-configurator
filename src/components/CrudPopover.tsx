import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';

import { Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FormatShapesRoundedIcon from '@mui/icons-material/FormatShapesRounded';
import { CrudProps } from './../types/crud';
import { useTranslation } from 'react-i18next';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0'
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5)
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
        }
    }
}));

const CrudPopover: React.FC<CrudProps> = ({ handleEdit, handleRename, handleDelete }): JSX.Element => {
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton
                id="demo-customized-button"
                aria-label="more"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {handleEdit && (
                    <MenuItem onClick={handleEdit} disableRipple>
                        <EditIcon />
                        {t('common.edit')}
                    </MenuItem>
                )}

                {handleRename && (
                    <MenuItem onClick={handleRename} disableRipple>
                        <FormatShapesRoundedIcon />
                        {t('common.rename')}
                    </MenuItem>
                )}

                {handleDelete && (
                    <MenuItem onClick={handleDelete} disableRipple>
                        <DeleteRoundedIcon />
                        {t('common.delete')}
                    </MenuItem>
                )}
            </StyledMenu>
        </Box>
    );
};
export default CrudPopover;
