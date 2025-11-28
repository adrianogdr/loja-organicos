import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          width: '100%',
          height: 200,
          backgroundColor: '#e8f5e9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
        }}
      >
        {product.emoji}
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {product.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: '#2d5016', fontWeight: 'bold' }}>
            R$ {product.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.unit}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: '#2d5016', '&:hover': { backgroundColor: '#1e3a0f' } }}
          onClick={() => onAddToCart(product)}
        >
          Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
