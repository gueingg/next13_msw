"use client";

import { Card, CardContent, Grid, Typography, Avatar } from "@mui/material";
import MoneyIcon from "@mui/icons-material/Money";
import { numberWithCommas } from "../../utils/number";

export const Budget = () => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              BUDGET
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {numberWithCommas(200000000)}원
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "error.main",
                height: 56,
                width: 56,
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
