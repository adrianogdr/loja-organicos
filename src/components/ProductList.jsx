import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Tomate Orgânico', description: 'Tomates frescos e suculentos', price: 8.90, unit: 'kg', emoji: '🍅' },
  { id: 2, name: 'Alface Crespa', description: 'Alface crocante cultivada organicamente', price: 5.50, unit: 'un', emoji: '🥬' },
  { id: 3, name: 'Cenoura Doce', description: 'Cenoura natural e adoçada', price: 6.20, unit: 'kg', emoji: '🥕' },
  { id: 4, name: 'Maçã Vermelha', description: 'Maçã vermelha pura de qualidade premium', price: 9.90, unit: 'kg', emoji: '🍎' },
  { id: 5, name: 'Banana Prata', description: 'Banana rica em potássio e vitaminas', price: 5.80, unit: 'kg', emoji: '🍌' },
  { id: 6, name: 'Brócolis Fresco', description: 'Brócolis verde saudável e nutritivo', price: 7.50, unit: 'un', emoji: '🥦' },
  { id: 7, name: 'Mel Puro', description: 'Mel 100% puro sem aditivos', price: 25.00, unit: 'pote 500g', emoji: '🍯' },
  { id: 8, name: 'Ovos Caipiras', description: 'Ovos de galinhas criadas soltas', price: 12.00, unit: 'dúzia', emoji: '🥚' },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, color: '#2d5016', fontWeight: 'bold' }}>
          Produtos Orgânicos Frescos
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          Qualidade e saúde na sua mesa
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
