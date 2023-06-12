import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

export default function AppBar() {
    return (
        <Box sx={{ border: 1, borderColor: "#4b5320", backgroundColor: "#6f754d", borderRadius: 1}}>
            <Grid container color="whitesmoke" padding={2}>
                <Grid item xs={1}>
                    <Typography variant="h6">
                        About me
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h6">
                        Press
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h6">
                        Chat
                    </Typography>
                </Grid>
                {/* <Grid item xs={9}>
                    <Typography variant="h6">
                        About me
                    </Typography>
                    <Typography variant="h6">
                        Press
                    </Typography>
                    <Typography variant="h6">
                        Chat
                    </Typography>
                </Grid> */}
                <Grid item xs={9} textAlign={"right"}>
                    <Typography variant="h6">
                        Louie Kabootski
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}