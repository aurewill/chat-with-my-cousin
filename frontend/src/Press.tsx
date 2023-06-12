import { Button, Grid, Link, Stack, Typography } from "@mui/material"

export const Press = () => {
    return (
        <Stack spacing={2} padding={2}>
            <Grid container spacing={1}>
                <Grid item xs={12} textAlign={"center"}>
                    <Typography variant="h6">Press</Typography>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Button
                        variant="text"
                        onClick={() => window.open("https://www.costco.com/", "_blank", "noreferrer")}
                    >
                        Costco
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    )
}