import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NewCard({ title, description, imgsrc }) {
    return (
        <Card sx={{ maxWidth: 345, margin: "0 auto", height: "100%" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imgsrc}
                // title="green iguana"
                // style={{ filter: "saturate(50%)" }}
            />
            <CardContent sx={{ minHeight: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
