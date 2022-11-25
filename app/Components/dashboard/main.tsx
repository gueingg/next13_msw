"use client";

import { Grid, Container, Box } from "@mui/material";
import { Budget } from "./budget";
import { Sales } from "./sales";
import { TaskProgress } from "./taskProgress";
import { Schedules } from "./schedule";

const main = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget></Budget>
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TaskProgress></TaskProgress>
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget></Budget>
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget></Budget>
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales></Sales>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <Budget></Budget>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <Budget></Budget>
          </Grid>
          <Grid item lg={8} sm={12} xl={9} xs={12}>
            <Schedules></Schedules>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default main;
