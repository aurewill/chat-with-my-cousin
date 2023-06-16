import { Grid, Stack, Typography } from "@mui/material"

export const AboutMe = () => {
    return (
        <Stack spacing={2} padding={2}>
            <Grid container spacing={1}>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="h6">About me</Typography>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="body1">
                        Hi, I'm Parker! I live in North Carolina with my wife and cat. 
                        We have a nice life - Connie will clean my clothes while I roll around with that kitty. 
                        I'm a military man, through and through. Sometimes I think I was born for what I do, 
                        where other times I feel that I was born to be under the bright lights, performing Hairspray 
                        with the boys. Who knows what the future has in store for my family. 
                        However, one thing I do know, is that this kitty needs his daddy! 😝
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="body1">
                        Feel free to chat with me by clicking the "Chat" button above. 
                        I can tell you more about me, learn about you, or just make small talk. 
                        Hope to speak with you soon!
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}