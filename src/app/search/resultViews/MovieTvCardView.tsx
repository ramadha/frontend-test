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


export function MovieTvCardView({ title, date, cardLabel, voteAverage, overview, genreNames }: { title: string; date: string; cardLabel: string; voteAverage: number; overview: string; genreNames: Array<string>; }) {
  return (

    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{title}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {new Date(date).toLocaleDateString()}
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
        avatar={
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={voteAverage * 10}
              color="primary"
              thickness={4}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" fontWeight={600} component="div">
                {voteAverage.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>{overview}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label={cardLabel} variant="outlined" color="primary" />
          <Stack
            divider={<Divider orientation="vertical" />}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            {genreNames.map((genreName) => (
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                {genreName}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>

  )
};