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
                        Hi I'm Parker. I live in Southern Pines, North Caroline with my wife Connie.
                        She is good for me. I love her very much. She will clean my clothes if I ask 
                        her to. We have cat named Garfield. He is good. He is the right cat for me. 
                        I found him when I was deployed in Greece. We got along so well that I put him 
                        on a plane to New Jersey to be picked up by my mom, Dianne.
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="body1">
                        Let me tell you more about my immediate family. I've already told you about my 
                        mom Dianne. I also have a father, Dan. He his good. I also have a younger 
                        brother named Collin. He is... maddening. I won't get into it now, but you can 
                        ask me more about him in chat.
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}