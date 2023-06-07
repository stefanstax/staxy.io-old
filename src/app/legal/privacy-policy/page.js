"use client";
import SharedLayout from "@/components/SharedLayout";
import { Container, Typography } from "@mui/material";
import PrivacyPolicyDocument from "../../mdx/privacy-policy.mdx";
import "../page.css";

const PrivacyPolicy = () => {
  return (
    <SharedLayout>
      <Container className="customFormatting my-48">
        <PrivacyPolicyDocument />
      </Container>
    </SharedLayout>
  );
};

export default PrivacyPolicy;
