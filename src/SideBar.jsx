import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import NewsIcon from '@mui/icons-material/Article';
import ChannelIcon from '@mui/icons-material/GroupWork';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import BoschReels from './BoschReels';
import { useEffect } from 'react';
import ChatPage from './ChatPage';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PowerSolutions from './PowerSolutions';
import ChannelsPage from './ChannelsPage';

const NAVIGATION = [
    {
        segment: 'menu',
        title: 'MENU',
        icon: <MenuIcon />,
        children: [
            {
                segment: 'boschGroup',
                title: 'Bosch Group',
                icon: < PublicIcon />
            },
            {
                segment: 'powerSolutions',
                title: 'Power Solutions',
                icon: <LightbulbOutlinedIcon />
            },
            {
                segment: 'hemaraj',
                title: 'Hemaraj',
                icon: <LocationOnIcon />
            },
            {
                segment: 'MyHR',
                title: 'My HR',
                icon: <PermIdentityOutlinedIcon />
            },
            {
                segment: 'boschReels',
                title: 'Bosch Reels',
                icon: <OndemandVideoIcon />
            },
            {
                segment: 'internalJobs',
                title: 'Internal Jobs',
                icon: <WorkOutlineIcon />
            },
        ],
    },
    {
        kind: 'divider',
    },
    {
        segment: 'news',
        title: 'NEWS',
        icon: <NewsIcon />,
    },
    {
        segment: 'channels',
        title: 'CHANNELS',
        icon: <ChannelIcon />,
    },
    {
        segment: 'chats',
        title: 'CHATS',
        icon: <ChatIcon />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent({ pathname })
{
    useEffect(() =>
    {
        if (pathname === '/news')
        {
            // Redirection to external link for "NEWS"
            window.open('https://www.bosch-presse.de/pressportal/de/de/news/', '_blank');
        }
    }, [pathname]);

    useEffect(() =>
    {
        if (pathname === '/menu/internalJobs')
        {
            // Redirection to external link for "NEWS"
            window.open('https://www.bosch.de/karriere/', '_blank');
        }
    }, [pathname]);

    useEffect(() =>
    {
        if (pathname === '/menu/boschGroup')
        {
            // Redirection to external link for "NEWS"
            window.open('https://www.bosch.com/de/', '_blank');
        }
    }, [pathname]);

    if (pathname === '/menu/hemaraj')
    {
        return (
            <Box
                sx={{
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <Typography variant="h6">Bosch Location in Hemaraj</Typography>
                <Box sx={{ position: 'relative', width: '100%', height: '500px' }}>
                    {/* Location Icon */}
                    <LocationOnIcon
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '48px',
                            zIndex: 10,
                        }}
                    />
                    {/* Google Map */}
                    <iframe
                        title="Bosch Hemaraj Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4883.751531933394!2d101.061360!3d13.098680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d44a3cf344c85%3A0x8bdf80ecedcc3d88!2sBosch%20Eastern%20Seaboard%20Industrial%20Estate!5e0!3m2!1sen!2sth!4v1633452834502!5m2!1sen!2sth"
                        style={{ width: '100%', height: '100%', border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </Box>
            </Box>
        );
    }



    if (pathname === '/channels')
    {
        return (
            <ChannelsPage />
        );
    }

    if (pathname === '/menu/powerSolutions')
    {
        return (
            <PowerSolutions />
        );
    }

    if (pathname === '/chats')
    {
        return (
            <ChatPage />
        );
    }

    if (pathname === '/menu/boschReels')
    {
        return (
            <BoschReels />
        );
    }

    return null;
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function SideBar(props)
{
    const { window } = props;

    const router = useDemoRouter('/menu');

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default SideBar;
