import { Card, CardMedia } from "@mui/material";

interface Props {
  img: string;
}

export default function DogCard({ img }: Props) {
    return (
        <Card sx={{ height: 230, display: "flex" }}>
            <CardMedia
                component="img"
                image={img}
                alt={"Imagen de un perro"}
                sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "contain",
                    p: 2,
                }}
            />
        </Card>
    );
}