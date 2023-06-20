import { supabase } from "../../supabase";

const useImage = (imageUrl) => {
  const { data: imageData } = supabase.storage
    .from("staxy_resources")
    .getPublicUrl(`images/${imageUrl}`);
  return imageData.publicUrl;
};

export default useImage;
