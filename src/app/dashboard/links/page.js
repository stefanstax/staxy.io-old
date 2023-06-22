"use client";
import SharedLayout from "@/components/SharedLayout";
import { supabase } from "../../../../supabase";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Edit, Trash, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import InBoundLink from "@/components/InBoundLink";
import Loaders from "@/components/Loaders";

const Links = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLinks = async () => {
    const { data } = await supabase.from("links").select();
    setLinks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const deleteOnRequest = async (linkId) => {
    await supabase.from("links").delete().eq("id", linkId);
  };

  const renderLinks = links.map((link) => {
    return (
      <Box
        key={link?.id}
        className="relative w-full md:w-4/12 flex flex-col justify-center items-center"
      >
        <Box className="w-full flex flex-col gap-[20px] bg-slate-200 text-slate-800 p-2 rounded drop-shadow-md relative">
          <Typography component="h4" className="font-black">
            {link?.title}
          </Typography>
          <Typography component="span" className="mt-2">
            {link?.url}
          </Typography>
        </Box>
        {/* Edit */}
        <InBoundLink
          to={`http://localhost:3000/dashboard/links/edit/${link?.id}`}
        >
          <Edit
            className={`absolute top-2 ${
              link?.title?.toUpperCase() === "CALENDLY" ? "right-2" : "right-8"
            } z-[99] text-slate-800 hover:text-blue-600 transition-all cursor-pointer`}
            size={16}
          />
        </InBoundLink>
        {/* Delete */}
        {link.title?.toUpperCase() != "CALENDLY" && (
          <Trash2
            onClick={() => deleteOnRequest(link?.id)}
            className="absolute top-2 right-2 z-[99] text-slate-800 hover:text-red-600 transition-all cursor-pointer"
            size={16}
          />
        )}
      </Box>
    );
  });

  return (
    <SharedLayout className="flex justify-center items-center px-4 my-48">
      <Box className="w-full max-w-[800px] px-4 flex flex-wrap justify-start items-center gap-[20px]">
        <Typography component="h1" className="w-full font-black text-[35px]">
          All DB Links
        </Typography>
        {loading && <Loaders loaderType="linksShow" loading={loading} />}
        {!loading && renderLinks}
      </Box>
    </SharedLayout>
  );
};

export default Links;
