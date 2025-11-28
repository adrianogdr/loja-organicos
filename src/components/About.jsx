import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const About = () => {
  const values = [
    {
      title: 'Qualidade',
      description: 'Produtos 100% orgânicos, cultivados sem agrotóxicos ou químicos sintéticos.'
    },
    {
      title: 'Sustentabilidade',
      description: 'Compromisso com o meio ambiente e práticas agrícolas responsáveis.'
    },
    {
      title: 'Frescor',
      description: 'Colheita diária garantindo a máxima frescura e nutrição dos produtos.'
    },
    {
      title: 'Confiança',
      description: 'Relacionamento transparente com nossos clientes desde 1998.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 3, color: '#2d5016', fontWeight: 'bold', textAlign: 'center' }}>
          Sobre Nós
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify', mb: 3 }}>
          A <strong>Sítio Verde Orgânicos</strong> é uma empresa familiar fundada em 1998, dedicada à produção e comercialização de produtos orgânicos de alta qualidade. 
          Localizada na região de Minas Gerais, nossa fazenda ocupa 50 hectares onde cultivamos diversos tipos de frutas, legumes e hortaliças.
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify', mb: 3 }}>
          Começamos como um pequeno projeto familiar e hoje atendemos centenas de clientes em toda a região, desde famílias individuais até restaurantes e feiras orgânicas. 
          Nossa missão é levar alimentos saudáveis, frescos e sustentáveis diretamente para a mesa de nossos clientes, promovendo um estilo de vida mais saudável e respeitoso com a natureza.
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify' }}>
          Todos os nossos produtos são certificados organicamente e cultivados seguindo as mais rigorosas normas de qualidade e segurança alimentar. 
          Utilizamos técnicas tradicionais combinadas com inovações modernas para garantir a máxima produtividade sem prejudicar o solo ou o ecossistema.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 4, color: '#2d5016', fontWeight: 'bold', textAlign: 'center' }}>
          Nossos Valores
        </Typography>
        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', backgroundColor: '#f1f8e9', border: '2px solid #c8e6c9' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, color: '#2d5016', fontWeight: 'bold' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 4, backgroundColor: '#f1f8e9', borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#2d5016', fontWeight: 'bold' }}>
          Certificações
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          🌱 Certificado de Agricultura Orgânica - IBD<br/>
          🌍 Certificação Internacional - IFOAM<br/>
          ✓ Selo de Qualidade - Associação de Produtores Orgânicos MG
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
