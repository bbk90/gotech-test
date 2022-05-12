import {Box, Paper, Typography} from "@mui/material";

const Header = () => {
    return (
        <Paper variant="outlined">
            <Box sx={{
                background: 'rgba(71,185,212,255)',
                height: '10px',
                borderRadius: '3px 3px 0 0'
            }}/>
            <Box sx={{padding: '20px'}}>
                <Typography variant="h5" sx={{marginBottom: '10px'}}>
                    GoTech Questionnaire
                </Typography>
                <Typography variant="body2" sx={{marginBottom: '10px'}}>
                    Show me what you got!
                </Typography>
                <Typography variant="body2" sx={{color: 'red'}}>
                    * Required
                </Typography>
            </Box>
        </Paper>
    );
};

export default Header;