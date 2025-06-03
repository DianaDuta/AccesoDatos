import { Card, CardContent, Typography, Button, CardMedia, CardActions, Stack } from "@mui/material";

interface Props {
  title: string;
  img: string;
  text: string;
}

export default function MiCard({ title, img, text }: Props) {
    return (
        <Card
            elevation={4}
            sx={{ width: "100%",
                transition: "transform .2s",
                "&:hover": { transform: "translateY(-4px)" },
                display: "flex",
                flexDirection: "column", 
            }}
        >
            <CardMedia
                component="img"
                image={img}
                alt={title}
                sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "contain",
                    p: 2,
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" textAlign="center" fontWeight={600}>
                    {title}
                </Typography>

                <Typography variant="body2" textAlign="center">
                    {text}
                </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small">
                        Visitar
                    </Button>
                    <Button variant="outlined" size="small">
                        Código
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    );
}