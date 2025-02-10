"use client";

import Image from "next/image";
import "swiper/css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//libs
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
  Box,
} from "@mui/material";

import {
  Home,
  Radio,
  Book,
  Event,
  ContactSupport,
  People,
  Favorite,
  AutoStories,
  Handshake,
} from "@mui/icons-material";

//imgs
import heroImage from "@/assets/imgs/igreja.jpeg";
import aboutImage from "@/assets/imgs/banner.jpg";
import eventImage from "@/assets/imgs/banner.jpg";
import logoComNome from "@/assets/imgs/logoComNome.png";

export default function LandingPage() {
  const values = [
    {
      icon: <People fontSize="inherit" />,
      title: "Comunidade",
      description: "Fomentamos o amor e a união entre os irmãos em Cristo.",
    },
    {
      icon: <Favorite fontSize="inherit" />,
      title: "Amor",
      description: "Vivemos o amor de Deus em nossas ações e relacionamentos.",
    },
    {
      icon: <AutoStories fontSize="inherit" />,
      title: "Fé",
      description:
        "Cremos e ensinamos a Palavra de Deus como base para a vida.",
    },
    {
      icon: <Handshake fontSize="inherit" />,
      title: "Serviço",
      description:
        "Ajudamos nossa comunidade através de obras e projetos sociais.",
    },
  ];

  const mediaItems = [
    {
      type: "image",
      src: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
      title: "Imagem 1",
      description: "Descrição da Imagem 1",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Vídeo 1",
      description: "Descrição do Vídeo 1",
    },
    {
      type: "image",
      src: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
      title: "Imagem 2",
      description: "Descrição da Imagem 2",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Vídeo 2",
      description: "Descrição do Vídeo 2",
    },
    {
      type: "image",
      src: "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
      title: "Imagem 3",
      description: "Descrição da Imagem 3",
    },
  ];

  const events = [
    {
      title: "Culto de Segunda-feira",
      description:
        "Venha participar de um culto abençoado para começar a semana.",
      dayOfWeek: "Segunda-feira", // Dia da semana
      time: "19:00", // Hora do evento
      image:
        "https://img.freepik.com/psd-premium/modelo-de-banner-da-web-de-conferencia-de-culto_160623-238.jpg?w=360",
    },
    {
      title: "Ensaio de Coral",
      description:
        "Ensaios semanais para o coral da igreja. Todos são bem-vindos!",
      dayOfWeek: "Terça-feira",
      time: "18:30",
      image:
        "https://img.freepik.com/psd-premium/modelo-de-banner-da-web-de-conferencia-de-culto_160623-238.jpg?w=360",
    },
    {
      title: "Culto de Oração",
      description: "Um tempo de oração e comunhão para fortalecer a fé.",
      dayOfWeek: "Quarta-feira",
      time: "20:00",
      image:
        "https://img.freepik.com/psd-premium/modelo-de-banner-da-web-de-conferencia-de-culto_160623-238.jpg?w=360",
    },
    {
      title: "Culto de Ensino Bíblico",
      description: "Estudo da palavra de Deus para edificação espiritual.",
      dayOfWeek: "Quinta-feira",
      time: "19:30",
      image:
        "https://img.freepik.com/psd-premium/modelo-de-banner-da-web-de-conferencia-de-culto_160623-238.jpg?w=360",
    },
    {
      title: "Reunião de Jovens",
      description:
        "Encontro semanal para jovens se conectarem e crescerem espiritualmente.",
      dayOfWeek: "Sexta-feira",
      time: "19:00",
      image:
        "https://img.freepik.com/psd-premium/modelo-de-banner-da-web-de-conferencia-de-culto_160623-238.jpg?w=360",
    },
    {
      title: "Culto de Sábado",
      description: "Celebração vibrante e cheia de louvor para todos.",
      dayOfWeek: "Sábado",
      time: "18:00",
      image:
        "https://img.freepik.com/psd-premium/modelo-de-banner-da-web-de-conferencia-de-culto_160623-238.jpg?w=360",
    },
    {
      title: "Culto de Domingo",
      description:
        "O culto principal da semana, com mensagens poderosas e momentos de louvor.",
      dayOfWeek: "Domingo",
      time: "10:00",
      image:
        "https://img.freepik.com/psd-premium/modelo-de-banner-da-web-de-conferencia-de-culto_160623-238.jpg?w=360",
    },
    // Adicione mais eventos conforme necessário
  ];


  const pastoresSede = [
    { name: "Pr. João Silva", role: "Pastor Presidente", image: "/images/pastor1.jpg" },
    { name: "Pr. Carlos Mendes", role: "Vice-presidente", image: "/images/pastor2.jpg" },
  ];
  
  const pastoresRecife = [
    { name: "Pr. Paulo Oliveira", role: "Pastor Regional", image: "/images/pastor3.jpg" },
    { name: "Pr. Ricardo Santos", role: "Coordenador", image: "/images/pastor4.jpg" },
  ];
  
  return (
    <main>
      {/* Header */}
      <header className="bg-blue-900 text-white fixed w-full z-50 shadow-lg top-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <Image
            src={logoComNome}
            alt="Logo da Igreja"
            width={100}
            height={100}
            className="object-contain"
          />
          <nav className="flex gap-6">
            <a href="#about" className="hover:underline">
              Quem Somos
            </a>
            <a href="#media" className="hover:underline">
              Mídias
            </a>
            <a href="#events" className="hover:underline">
              Eventos
            </a>
            <a href="#radio" className="hover:underline">
              Nossa Rádio
            </a>
            <a href="#pastors" className="hover:underline">
              Pastores
            </a>
            <a href="#prayer" className="hover:underline">
              Pedido de Oração
            </a>
            <a href="#bible" className="hover:underline">
              Bíblia Online
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="mt-16">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <Image
              src={heroImage}
              alt="Banner 1"
              width={1920}
              height={600}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <Image
              src={aboutImage}
              alt="Banner 2"
              width={1920}
              height={600}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </Carousel>
      </section>

      {/* Quem Somos */}
      <Container id="about" sx={{ py: 12, textAlign: "center" }}>
        {/* Animação do Título e Descrição */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" fontWeight={700} color="primary">
            Quem Somos
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            mt={2}
            maxWidth="md"
            mx="auto"
          >
            Temos uma visão dada por Deus de uma igreja santa, cristocêntrica e
            centrada na Palavra de Deus; e expandi-la através do evangelismo.
          </Typography>
        </motion.div>

        <Grid container spacing={4} mt={6} justifyContent="center">
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 2,
                    minHeight: 280, // Ajuste para o tamanho mínimo que você deseja
                  }}
                >
                  <Box color="primary.main" fontSize={50}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600} mt={2}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    {value.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Botão Saiba Mais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 5, px: 5, py: 1.5, borderRadius: 2 }}
          >
            Saiba Mais
          </Button>
        </motion.div>
      </Container>

      {/* Mídias */}
      <Grid container spacing={4} mt={6} justifyContent="center">
        {mediaItems
          .filter((item) => item.type === "image")
          .map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 2,
                    minHeight: 250, // Altura mínima para garantir que os cards não fiquem muito pequenos
                  }}
                >
                  {/* Imagem */}
                  <Box>
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 8,
                        objectFit: "cover", // Para garantir que a imagem não distorça
                      }}
                    />
                  </Box>

                  {/* Título e Descrição */}
                  <Typography variant="h6" fontWeight={600} mt={2}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
      </Grid>

      {/* Grid com Cards - Vídeos */}
      <section id="events" className="py-20 bg-blue-50 text-center">
        <Grid container spacing={4} mt={6} justifyContent="center">
          {mediaItems
            .filter((item) => item.type === "video")
            .map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      borderRadius: 2,
                      minHeight: 250, // Altura mínima para garantir que os cards não fiquem muito pequenos
                    }}
                  >
                    {/* Vídeo */}
                    <Box>
                      <video
                        width="100%"
                        height="auto"
                        controls
                        style={{
                          borderRadius: 8,
                        }}
                      >
                        <source src={item.src} type="video/mp4" />
                        Seu navegador não suporta o formato de vídeo.
                      </video>
                    </Box>

                    {/* Título e Descrição */}
                    <Typography variant="h6" fontWeight={600} mt={2}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={1}>
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </section>

      {/* Eventos */}
      <section id="events" className="py-20 bg-blue-50 text-center flex">
        <Grid
          container
          spacing={4}
          mt={6}
          justifyContent="center"
          alignItems="center"
        >
          {events.map((event, index) => (
            <Grid
              xs={12}
              sm={6}
              md={3}
              key={index}
              container
              spacing={6}
              mt={6}
              justifyContent="center"
              alignItems="center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    width: "100%", // Garantir que o card ocupe toda a largura disponível
                    maxWidth: 350, // Define um tamanho máximo para os cards
                    textAlign: "center",
                    borderRadius: 2,
                    minHeight: 250, // Altura mínima para garantir que os cards não fiquem muito pequenos
                    boxShadow: 3, // Define uma sombra mais suave para um efeito visual mais interessante
                    display: "flex", // Flexbox para alinhar o conteúdo corretamente
                    flexDirection: "column", // Alinha os itens de cima para baixo
                    justifyContent: "space-between", // Distribui o espaço entre os itens dentro do card
                  }}
                >
                  {/* Ícone ou Imagem do Evento */}
                  <Box sx={{ mb: 2 }}>
                    {" "}
                    {/* Margem inferior para separar a imagem do título */}
                    <img
                      src={event.image}
                      alt={event.title}
                      style={{
                        width: "100%", // Faz a imagem ocupar 100% da largura disponível
                        height: "auto", // Mantém a altura proporcional à largura
                        borderRadius: 8, // Bordas arredondadas na imagem
                        objectFit: "cover", // Para garantir que a imagem não distorça
                      }}
                    />
                  </Box>

                  {/* Título e Descrição do Evento */}
                  <Typography variant="h6" fontWeight={600} mt={2}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    {event.description}
                  </Typography>

                  {/* Data do Evento */}
                  <Typography variant="body1" fontWeight={500} mt={2}>
                    {event.dayOfWeek} - {event.time}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Nossa Rádio */}
      <section id="radio" className="py-20 bg-gray-100 text-center">
        <Grid
          container
          spacing={4}
          mt={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} textAlign="center">
            <Typography
              variant="h4"
              fontWeight={700}
              color="primary.main"
              gutterBottom
            >
              Nossa Rádio 📻
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={3}>
              Acompanhe nossa programação e ouça mensagens edificantes na nossa
              rádio online.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                width: "100%",
                textAlign: "center",
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Box display="flex" justifyContent="center">
                <img
                  src="https://www.radioinstrumentalgospel.com.br/admin/data/img/gallery/Slider/BANNER%20BEBE%20RADIO%201000%20%20400%20SITE%20RIO%20PRETO.png" // Altere para a logo correta da rádio
                  alt="Rádio IEDE"
                  style={{
                    width: "50%",
                    marginBottom: 16,
                  }}
                />
              </Box>

              <Typography variant="h6" fontWeight={600} color="textPrimary">
                Ouça agora nossa rádio!
              </Typography>

              <Button
                variant="contained"
                color="primary"
                href="https://radioiede.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 2, px: 4, py: 1, fontSize: "1rem" }}
              >
                Acessar Rádio 📡
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </section>

      {/* Pastores */}
      <section id="pastors" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">Pastores</h2>

        <Grid container spacing={4} mt={6} justifyContent="center">
  {/* Título da Seção */}
  <Grid item xs={12} textAlign="center">
    <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
      Nossos Pastores 🙏
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Conheça os líderes espirituais que guiam nossa igreja com fé e dedicação.
    </Typography>
  </Grid>

  {/* Pastores da Sede */}
  <Grid item xs={12} textAlign="center">
    <Typography variant="h5" fontWeight={600} color="secondary.main" mt={4} gutterBottom>
      Pastores da Sede
    </Typography>
  </Grid>

  {pastoresSede.map((pastor, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 300,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Box>
          <img
            src={pastor.image}
            alt={pastor.name}
            style={{
              width: "100%",
              height: 200,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h6" fontWeight={600} mt={2}>
          {pastor.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {pastor.role}
        </Typography>
      </Paper>
    </Grid>
  ))}

  {/* Pastores de Recife */}
  <Grid item xs={12} textAlign="center">
    <Typography variant="h5" fontWeight={600} color="secondary.main" mt={6} gutterBottom>
      Pastores de Recife
    </Typography>
  </Grid>

  {pastoresRecife.map((pastor, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 300,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Box>
          <img
            src={pastor.image}
            alt={pastor.name}
            style={{
              width: "100%",
              height: 200,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h6" fontWeight={600} mt={2}>
          {pastor.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {pastor.role}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>

      </section>

      {/* Pedido de Oração */}
      <section id="prayer" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Pedido de Oração</h2>
      </section>

      {/* Bíblia Online */}
      <section id="bible" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">Bíblia Online</h2>
      </section>

      {/* Artigos e Estudos */}
      <section id="articles" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Artigos e Estudos</h2>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p>
          &copy; 2024 Igreja Evangélica Deus é Espírito. Todos os direitos
          reservados.
        </p>
      </footer>
    </main>
  );
}
