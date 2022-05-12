import {Box, Button} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'right'}}>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    width: '100px',
                    background: 'rgba(71,185,212,255)'
                }}
            >Submit</Button>
        </Box>
    );
};

export default Footer;