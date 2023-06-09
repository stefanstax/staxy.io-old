"use client";
import InBoundLink from "@/components/InBoundLink";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <InBoundLink to="/dashboard/faq/create/">Head to FAQ Create</InBoundLink>
    </Box>
  );
};

export default Dashboard;
