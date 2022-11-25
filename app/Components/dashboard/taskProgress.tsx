"use client";

import { Card, CardContent, Grid, Typography, Avatar, Box, LinearProgress } from "@mui/material";
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TaskProgress = () => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TaskProgress
            </Typography>
            <Typography color="textPrimary" variant="h4">
              70%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "warning.main",
                height: 56,
                width: 56,
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={70.0}
          variant="determinate"
        />
      </Box>
      </CardContent>
    </Card>
  );
};
