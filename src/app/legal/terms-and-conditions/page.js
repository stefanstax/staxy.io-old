"use client";
import SharedLayout from "@/components/SharedLayout";
import { Container, Typography } from "@mui/material";
import TermsAndConditionsDocument from "../../mdx/terms-and-conditions.mdx";
import "../page.css";

const TermsAndConditions = () => {
  return (
    <SharedLayout>
      <Container fixed className="customFormatting my-48">
        <TermsAndConditionsDocument />
      </Container>
    </SharedLayout>
  );
};

export default TermsAndConditions;
