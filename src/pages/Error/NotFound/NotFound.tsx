import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRouteEnum } from 'constpack';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(AppRouteEnum.MAIN);
    };

    return (
        <div>
            404
            <button type="button" onClick={handleClick}>
                Back
            </button>
        </div>
    );
};

export default NotFound;
