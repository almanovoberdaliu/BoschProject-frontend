import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box, Divider } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BoschReels from './BoschReels';
import PowerSolutions from './PowerSolutions';

const NAV_ITEMS = [
    { segment: '/menu/boschGroup', title: 'Bosch Group', icon: <PublicIcon /> },
    { segment: '/menu/powerSolutions', title: 'Power Solutions', icon: <LightbulbOutlinedIcon /> },
    { segment: '/menu/hemaraj', title: 'Hemaraj', icon: <LocationOnIcon /> },
    { segment: '/menu/MyHR', title: 'My HR', icon: <PermIdentityOutlinedIcon /> },
    { segment: '/menu/boschReels', title: 'Bosch Reels', icon: <OndemandVideoIcon /> },
    { segment: '/menu/internalJobs', title: 'Internal Jobs', icon: <WorkOutlineIcon /> },
];

function ChannelsPage()
{
    const [selectedSegment, setSelectedSegment] = useState('/menu/boschGroup'); // default selected segment

    // Function to handle menu item click
    const handleMenuClick = (segment) =>
    {
        setSelectedSegment(segment);
    };

    // Open the link for Internal Jobs when selected
    useEffect(() =>
    {
        if (selectedSegment === '/menu/internalJobs')
        {
            window.open('https://www.bosch.de/karriere/', '_blank');
        }
    }, [selectedSegment]);

    return (

        <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>

            <Box
                sx={{
                    width: 250,
                    backgroundColor: '#f4f4f4',
                    padding: '16px',
                    boxSizing: 'border-box',
                    overflowY: 'auto',
                }}
            >
                <h4 >CHANNELS</h4>
                <List>
                    {NAV_ITEMS.map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            onClick={() => handleMenuClick(item.segment)}
                            selected={selectedSegment === item.segment}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Vertical Divider */}
            <Divider orientation="vertical" flexItem sx={{ borderLeft: '2px solid #000' }} />

            {/* Right Content Area */}
            <Box sx={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
                {selectedSegment === '/menu/boschGroup' && <div>Bosch Group Content</div>}
                {selectedSegment === '/menu/powerSolutions' && <div>{<PowerSolutions />}</div>}
                {selectedSegment === '/menu/hemaraj' && (
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
                        <div style={{ fontSize: '20px', marginBottom: '16px' }}>Bosch Location in Hemaraj</div>
                        <Box sx={{ position: 'relative', width: '100%', height: '500px' }}>
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
                            <iframe
                                title="Bosch Hemaraj Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4883.751531933394!2d101.061360!3d13.098680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d44a3cf344c85%3A0x8bdf80ecedcc3d88!2sBosch%20Eastern%20Seaboard%20Industrial%20Estate!5e0!3m2!1sen!2sth!4v1633452834502!5m2!1sen!2sth"
                                style={{ width: '100%', height: '100%', border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </Box>
                    </Box>
                )}
                {selectedSegment === '/menu/MyHR' && <div>My HR Content</div>}
                {selectedSegment === '/menu/boschReels' && <div>{<BoschReels />}</div>}
            </Box>
        </Box>
    );
}

export default ChannelsPage;
