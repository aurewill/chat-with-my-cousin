import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FeedIcon from '@mui/icons-material/Feed';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const redirectByNavValue: Record<number, string> = {
    0: "/",
    1: "/chat",
    2: "press",
};

const selectByRoute: Record<string, number> = {
    "/": 0,
    "/chat": 1,
    "/press": 2,
}

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState(selectByRoute[location.pathname]);

    useEffect(() => {
        setValue(selectByRoute[location.pathname]);
    }, [location.pathname])

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
                setValue(newValue);
                navigate(redirectByNavValue[newValue]);
            }}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Chat" icon={<QuestionAnswerIcon />} />
            <BottomNavigationAction label="Press" icon={<FeedIcon />} />
        </BottomNavigation>
    );
}