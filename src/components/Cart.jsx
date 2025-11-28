import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Cart = ({ open, onClose, cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#2d5016', color: 'white', fontWeight: 'bold' }}>
        Meu Carrinho
      </DialogTitle>
      <DialogContent sx={{ pt: 3 }}>
        {cartItems.length === 0 ? (
          <Typography sx={{ textAlign: 'center', py: 4 }}>
            Seu carrinho está vazio
          </Typography>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f1f8e9' }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Produto</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Qtd</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Preço</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Total</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Ação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <span style={{ fontSize: 24 }}>{item.emoji}</span>
                          {item.name}
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                          <IconButton
                            size="small"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography sx={{ minWidth: 30, textAlign: 'center' }}>
                            {item.quantity}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>
                      <TableCell align="right">R$ {item.price.toFixed(2)}</TableCell>
                      <TableCell align="right">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => onRemoveFromCart(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f1f8e9', borderRadius: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Subtotal:</Typography>
                <Typography variant="h6">R$ {total.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2">Frete:</Typography>
                <Typography variant="body2">A calcular</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #c8e6c9', pt: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2d5016' }}>Total:</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2d5016' }}>R$ {total.toFixed(2)}</Typography>
              </Box>
            </Box>
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} sx={{ color: 'text.secondary' }}>
          Continuar Comprando
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ backgroundColor: '#2d5016', '&:hover': { backgroundColor: '#1e3a0f' } }}
          disabled={cartItems.length === 0}
        >
          Finalizar Compra
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Cart;
