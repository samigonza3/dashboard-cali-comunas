// ElectionPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Container, Typography, CssBaseline, ThemeProvider, Grid } from '@mui/material';
import theme from '../Themes/theme.js';
import { electionData } from '../Data/Concejo'; // Importa la información de las elecciones
import { MenuItem, Select } from '@mui/material';


ChartJS.register(ArcElement, Tooltip, Legend);

const ElectionPieChart = () => {
  const data = {
    labels: electionData.labels,
    datasets: [
      {
        label: 'Número de Curules',
        data: electionData.datasets[0].data,
        backgroundColor: electionData.datasets[0].backgroundColor,
        borderColor: electionData.datasets[0].borderColor,
        borderWidth: 1,
      },
    ],
  };

  // Filtrar los primeros 10 candidatos
  const firstTenCandidates = Object.values(electionData.candidatesInfo)
    .flatMap((party) => party.candidates.slice(0, 10));

  const candidatesData = {
    labels: firstTenCandidates.map(candidate => candidate.name),
    datasets: [
      {
        label: 'Votos por Candidato',
        data: firstTenCandidates.map(candidate => candidate.votes),
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
  };

  const [selectedParty, setSelectedParty] = React.useState('Partido de la U'); // Establecer el estado inicial como 'Partido Liberal'
  const selectedPartyData = electionData.candidatesInfo[selectedParty]; // Datos del partido seleccionado


  return (
<>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container>
          <Grid item>

      <Typography variant='h6'>Número de Curules por Partido</Typography>
      <Pie data={data} />
      </Grid>
      <Grid item>

      <Typography variant='h6'>Votos por los Primeros 10 Candidatos</Typography>
      <Pie data={candidatesData} />
      </Grid>
      <Grid item>
        <Typography variant='h6'>Información de Candidatos por Partido</Typography>
        <Select
          value={selectedParty}
          onChange={(e) => setSelectedParty(e.target.value)}
        >
          <MenuItem value="">Seleccione un partido</MenuItem>
          {Object.keys(electionData.candidatesInfo).map((party) => (
            <MenuItem key={party} value={party}>{party}</MenuItem>
          ))}
        </Select>
        {selectedParty && (
          <ul>
            {selectedPartyData.candidates.map((candidate) => (
              <li key={candidate.name}>
                <strong>{candidate.name}</strong>: Votos - {candidate.votes}, Porcentaje - {candidate.percentage}
                {candidate.link && <a href={candidate.link} target="_blank" rel="noopener noreferrer"> Más información</a>}
              </li>
            ))}
          </ul>
        )}
    </Grid>
    </Grid>
    </Container>
    </ThemeProvider>
    </>
  );
};

export default ElectionPieChart;
