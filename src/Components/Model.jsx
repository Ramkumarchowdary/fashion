/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Model = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div>
          <DialogTitle>{product.title}</DialogTitle>
        </div>
        <div>
          <Button onClick={onClose} variant="contained" color="error">
            <CloseIcon />
          </Button>
        </div>
      </div>
      <DialogContent>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{  borderRadius: "8px" }}
        />
        <Typography variant="body1" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </DialogContent>
      <DialogActions></DialogActions>
      <Button sx={{mb: 1}} variant="contained" endIcon={<ShoppingCartIcon />}>
  Add to cart
</Button>
    </Dialog>
  );
};

export default Model;
