import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Link,
  Stack,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import logo from '../assets/logo.png';

export default function WeddingWelcomePage() {
  const handleAddToCalendar = () => {
    const link = document.createElement('a');
    link.href = '/filipa&luis.ics';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);  // necessário para alguns navegadores
    link.click();
    document.body.removeChild(link);
  };
  const isShort = useMediaQuery('(max-height:760px)');
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: 'hidden',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-between'
      }}
    >
      <Avatar
        alt="Logo"
        src={logo}
        sx={{
          width: isShort ? 125 : 280,
          height: 'auto',
          mt: 2
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          mt: { xs: 3, sm: 7 },
          gap: isShort ? 5 : 12.5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"

          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: "center",
            gap: { xs: 5, sm: 7 }
          }}
        >
          <Grid item xs={12} md={6} sx={{ display: 'flex', flex: 1 }}>
            <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <LocationOnIcon color="error" />
                  <Typography variant="h6" fontWeight="bold" fontFamily="'Cormorant Garamond', serif" color="#503d05">Cerimónia</Typography>
                </Stack>
                <Stack direction="column" spacing={3} mb={1}>
                  <Typography variant="body1" fontFamily="'Cormorant Garamond', serif" color="#503d05">
                    Igreja São Pedro Fins, Largo Souto, São Pedro Fins
                  </Typography>
                  <Link
                    href="https://maps.app.goo.gl/vXSYvWbh6gj4ghhS6"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    fontFamily="'Cormorant Garamond', serif"
                  >
                    Ver no mapa
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flex: 1 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent sx={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <LocationOnIcon color="error" />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    fontFamily="'Cormorant Garamond', serif"
                    color="#503d05">
                    Depois da Cerimónia
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={3} mb={1}>
                  <Typography
                    variant="body1"
                    fontFamily="'Cormorant Garamond', serif"
                    color="#503d05">
                    Quinta Cardeal, Rua Boaventura Ferreira de Sousa, Fajozes
                  </Typography>
                  <Link
                    href="https://maps.app.goo.gl/NFzjq2ZEhmCxaNyLA"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    fontFamily="'Cormorant Garamond', serif"
                  >
                    Ver no mapa
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            startIcon={<CalendarMonthIcon />}
            onClick={handleAddToCalendar}
            sx={{
              backgroundColor: '#b4a475',
              color: '#fff', // ajusta conforme o contraste
              '&:hover': {
                backgroundColor: '#a39267', // versão mais escura no hover
              },
            }}
          >
            Adicionar ao calendário
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
