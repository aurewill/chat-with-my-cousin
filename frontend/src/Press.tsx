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
                {/* https://www.kittenaroundcatlounge.com/ */}
                <Grid item xs={12} textAlign={"center"}>
                    <Button
                        variant="text"
                        onClick={() => window.open("https://www.kittenaroundcatlounge.com/", "_blank", "noreferrer")}
                    >
                        Kitten Around
                    </Button>
                </Grid>
                {/* https://www.amazon.com/dp/B0BD56NC8R/ref=twister_B09TW93ZFP?_encoding=UTF8&psc=1 */}
                <Grid item xs={12} textAlign={"center"}>
                    <Button
                        variant="text"
                        onClick={() => window.open("https://www.amazon.com/Underwear-Stretch-Underpants-Breathable-Printed/dp/B0BWD6L7ZH", "_blank", "noreferrer")}
                    >
                        Underpants
                    </Button>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Button
                        variant="text"
                        onClick={() => window.open("https://www.amazon.com/dp/B0BD56NC8R/ref=twister_B09TW93ZFP?_encoding=UTF8&psc=1", "_blank", "noreferrer")}
                    >
                        Overpants
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    )
}