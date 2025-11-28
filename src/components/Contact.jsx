import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#2d5016' }} />,
      title: 'Endereço',
      details: 'Estrada Rural 342, km 15\nMinas Gerais, MG 31920-000\nBrasil'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#2d5016' }} />,
      title: 'Telefone',
      details: '(31) 3333-4444\n(31) 98765-4321 (WhatsApp)'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#2d5016' }} />,
      title: 'Email',
      details: 'contato@sitioverde.com.br\npedidos@sitioverde.com.br'
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#2d5016' }} />,
      title: 'Horário',
      details: 'Seg-Sex: 08:00 - 18:00\nSáb: 08:00 - 12:00\nDom: Fechado'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, color: '#2d5016', fontWeight: 'bold' }}>
          Entre em Contato
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Ficamos felizes em ouvir você! Envie uma mensagem ou use os dados abaixo para entrar em contato.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', backgroundColor: '#f1f8e9', border: '2px solid #c8e6c9', textAlign: 'center', p: 2 }}>
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                {info.icon}
              </Box>
              <Typography variant="h6" sx={{ mb: 2, color: '#2d5016', fontWeight: 'bold' }}>
                {info.title}
              </Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8, color: 'text.secondary' }}>
                {info.details}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" sx={{ mb: 3, color: '#2d5016', fontWeight: 'bold' }}>
              Envie uma Mensagem
            </Typography>
            {submitted && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Telefone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Assunto"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                variant="outlined"
                multiline
                rows={5}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#2d5016', '&:hover': { backgroundColor: '#1e3a0f' }, py: 1.5, fontSize: '1rem' }}
              >
                Enviar Mensagem
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" sx={{ mb: 3, color: '#2d5016', fontWeight: 'bold' }}>
              Visite-nos
            </Typography>
            <Box
              component="iframe"
              sx={{
                width: '100%',
                height: 400,
                border: 'none',
                borderRadius: 2
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9450969846944!2d-43.94726342346948!3d-19.82477548228095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3d6efb5e6d5d5d5%3A0x1234567890abcdef!2sSítio%20Verde%20Orgânicos!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></Box>
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', fontStyle: 'italic' }}>
              Mapa ilustrativo. Localização pode variar conforme a região.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
