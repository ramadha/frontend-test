import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Chip,
    CircularProgress,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

export function PeopleCardView({ peopleName, knownForDepartment, knownForItems }: { peopleName: string; knownForDepartment: string; knownForItems: Array<string>; }) {
    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardHeader
                title={<Typography variant="h5">{peopleName}</Typography>}
                subheader={<Typography variant="body2" color="text.secondary">Known For: {knownForDepartment}</Typography>}
            />
            <CardContent>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                >
                    {knownForItems.map((knownForItem, i) => [i > 0 && ", ",
                    <Typography
                        variant="body2"
                        component="div"
                        color="text.secondary"
                    >
                        {knownForItem}
                    </Typography>
                    ])}
                </Stack>
            </CardContent>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <Chip label="People" variant="outlined" color="primary" />
                </Stack>
            </CardContent>
        </Card>
    )
}