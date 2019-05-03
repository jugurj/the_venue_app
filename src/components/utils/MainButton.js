import React from 'react';
import Button from '@material-ui/core/Button';

import ticket_icon from '../../resources/images/icons/ticket.svg';

const MainButton = (props) => {
    return (
        <Button
            href=""
            variant="contained"
            size="small"
            style={{
                background: '#EAC435',
                color: '111111'
            }}
        >
            <img src={ticket_icon} className="iconImage" alt="Icon Button"/>
            {props.text}
        </Button>
    );
};

export default MainButton;