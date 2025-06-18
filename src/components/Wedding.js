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
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import bgImage from '../assets/bgImage.jpg';
import logo from '../assets/logo.png';
import { Bold } from "lucide-react";

export default function WeddingWelcomePage() {
  const handleAddToCalendar = () => {
    alert("Evento adicionado ao calendário (mock)");
    // Aqui podes fazer download de um .ics ou redirecionar para o Google Calendar
  };
  return (
    <Box
      sx={{
        width: '100vw',   // 100% da largura da viewport
        height: '100vh',  // 100% da altura da viewport
        overflow: 'auto', // permite scroll se precisar
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Avatar
        alt="Logo"
        src={logo}
        sx={{
          flex: 1,
          width: 225,
          height: 'auto',
          alignSelf: "center",
          marginTop: 5
        }}
      />
      <Box
        width="100%"
        height='auto'
        sx={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 5
        }}
      >
        <Container sx={{ my: 7, display: 'flex', flexDirection: 'column', gap: 15 }}>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="stretch"
            sx={{ display: 'flex', flexDirection: 'column', alignContent: "center" }}
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
                      underline="hover"
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
                      Festa
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
                      underline="hover"
                      fontFamily="'Cormorant Garamond', serif"
                    >
                      Ver no mapa
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box textAlign="center" sx="flex: 1">
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
    </Box>
  );
}
