"use client";
import InBoundLink from "@/components/InBoundLink";
import SharedLayout from "@/components/SharedLayout";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <SharedLayout className="flex justify-center items-center">
      <Box>
        <InBoundLink
          to="/dashboard/faq/create/"
          onClick={() => router.push("/dashboard/faq/create")}
        >
          Head to FAQ Create
        </InBoundLink>
        <InBoundLink
          to="/dashboard/faq/edit/"
          onClick={() => router.push("/dashboard/faq/edit")}
        >
          Head to Edit Faq List
        </InBoundLink>
      </Box>
    </SharedLayout>
  );
};

export default Dashboard;
