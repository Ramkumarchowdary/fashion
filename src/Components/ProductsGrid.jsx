/* eslint-disable react/prop-types */
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  //   Button,
} from "@mui/material";

const ProductCard = ({ prod, onClick }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }} onClick={() => onClick(prod)}>
      <CardMedia
        component="img"
        height="340"
        image={prod.thumbnail}
        alt={prod.title}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" component="div" noWrap>
          {prod.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          ${prod.price}
        </Typography>
        {/* <Button variant="outlined" color="primary">
          View Details
        </Button> */}
      </CardContent>
    </Card>
  );
};

const ProductsGrid = ({ data, onProductClick }) => {
  return (
    <Grid container spacing={2}>
      {data.map((prod) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={prod.id}>
          <ProductCard prod={prod} onClick={onProductClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
