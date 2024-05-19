import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../components/axios";

export const useFileMutation = () => {
  const mUpload = useMutation({
    mutationKey: ["uploadFile"],
    mutationFn: async (body: any) => {
      try {
        console.log("🚀 ~ res 1:");
        const res = await axiosInstance.post("uploadfile/", body, {
          method: "POST",
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log("🚀 ~ res 2", res);
        return res;
      } catch (e) {
        console.log("🚀 ~ res 3", e);
        return null;
      }
    },
  });

  return { mUpload };
};
