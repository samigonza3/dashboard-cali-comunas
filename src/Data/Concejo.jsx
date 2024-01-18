export const electionData = {
    labels: [
      'Partido de la U',
      'Partido Liberal',
      'Pacto Histórico',
      'Partido Verde',
      'Centro Democrático',
      'Cambio Radical',
      'Partido Conservador',
      'Cali Nos Une',
      'Colombia Renaciente',
      'Firmes con Cali (Oposición)',
    ],
    datasets: [
      {
        label: 'Número de Curules',
        data: [4, 3, 3, 3, 2, 2, 1, 1, 1, 1], // Número de curules para cada partido
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
    candidatesInfo: {
      'Partido de la U': {
        title: 'Partido de la U',
        candidates: [
          { name: 'Audry Maria Toro Echavarría', votes: 19.363, percentage: '2.6%', link: 'https://www.lasillavacia.com/quien-es-quien/audry-maria-toro-echavarria/' },
          { name: 'Tania Fernandez Sánchez', votes: 18.226, percentage: '2.4%', link: 'https://www.lasillavacia.com/quien-es-quien/tania-fernandez-sanchez/' },
          { name: 'Henry Peláez Cifuentes', votes: 16.853, percentage: '2.2%', link: 'https://www.lasillavacia.com/quien-es-quien/henry-pelaez-cifuentes/' },
          { name: 'Carlos Andrés Arias Rueda', votes: 14.483, percentage: '1.9%', link: 'https://www.lasillavacia.com/quien-es-quien/carlos-andres-arias-rueda/' },
        ],
      },
      'Partido Liberal': {
        title: 'Partido Liberal',
        candidates: [
          { name: 'Carlos Hernando Pinilla Malo', votes: 18.721, percentage: '2.5%', link: 'https://www.lasillavacia.com/quien-es-quien/carlos-pinilla-malo/' },
          { name: 'Fabio Alonso Arroyave Botero', votes: 16.392, percentage: '2.2%', link: 'https://www.lasillavacia.com/quien-es-quien/fabio-alonso-arroyave-botero/' },
          { name: 'James Junior Agudelo Arevalo', votes: 13.566, percentage: '1.8%', link: 'https://www.lasillavacia.com/quien-es-quien/james-junior-agudelo-arevalo/' },
        ],
      },
      'Pacto Histórico': {
        title: 'Pacto Histórico',
        candidates: [
          { name: 'Ana Leidy Erazo Ruiz', link: 'https://www.lasillavacia.com/quien-es-quien/ana-leidy-erazo-ruiz/' },
          { name: 'Luis Fernando Salazar Guapacha' },
          { name: 'Maria del Carmen Londoño Sanna', link: 'https://www.lasillavacia.com/quien-es-quien/maria-del-carmen-londono-sanna/' },
        ],
      },
      'Partido Verde': {
        title: 'Partido Verde',
        candidates: [
          { name: 'Flower Enrique Rojas Torres', votes: 16.772, percentage: '2.2%', link: 'https://www.lasillavacia.com/quien-es-quien/flower-enrique-rojas-torres/' },
          { name: 'Rodrigo Salazar Sarmiento', votes: 16.344, percentage: '2.2%', link: 'https://www.lasillavacia.com/quien-es-quien/rodrigo-salazar-sarmiento/' },
          { name: 'Carlos Ariel Patiño Moya', votes: 10.807, percentage: '1.4%', link: '' },  // Enlace pendiente
        ],
      },
      'Centro Democrático': {
        title: 'Centro Democrático',
        candidates: [
          { name: 'Rafael Andrés Escobar González', votes: 16.772, percentage: '2.2%', link: '' },  // Enlace pendiente
          { name: 'Juan Felipe Murgueitio Bustamante', votes: 16.344, percentage: '2.2%', link: 'https://www.lasillavacia.com/quien-es-quien/juan-felipe-murgueitio-bustamante/' },
        ],
      },
      'Cambio Radical': {
        title: 'Cambio Radical',
        candidates: [
          { name: 'Edison Lucumi Lucumi', votes: 17.043, percentage: '2.3%', link: '' },  // Enlace pendiente
          { name: 'Alexandra Hernandez Cedeño', votes: 9.272, percentage: '1.2%', link: 'https://www.lasillavacia.com/quien-es-quien/alexandra-hernandez-cedeno/' },
        ],
      },
      'Partido Conservador': {
        title: 'Partido Conservador',
        candidates: [
          { name: 'Marlon Andrés Cubillos Borrero', votes: 17.043, percentage: '2.3%', link: 'https://www.lasillavacia.com/quien-es-quien/marlon-andres-cubillos-borrero/' },
        ],
      },
      'Cali Nos Une': {
        title: 'Cali Nos Une',
        candidates: [
          { name: 'Edison Alberto Giraldo Hoyos', votes: 12.578, percentage: '1.7%', link: 'https://www.lasillavacia.com/quien-es-quien/edison-alberto-giraldo-hoyos/' },
        ],
      },
      'Colombia Renaciente': {
        title: 'Colombia Renaciente',
        candidates: [
          { name: 'Daniela Plaza Saldarriaga', votes: 7.359, percentage: '1%', link: '' },  // Enlace pendiente
        ],
      },
      'Firmes con Cali (Oposición)': {
        title: 'Firmes con Cali (Oposición)',
        candidates: [
          { name: 'Roberto Ortiz', link: 'https://www.lasillavacia.com/quien-es-quien/roberto-ortiz-uruena/' },
        ],
      },
    },
  };
  