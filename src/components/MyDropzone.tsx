import { Button, Stack, Typography } from "@mui/material";
import React, { CSSProperties, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useFileMutation } from "../hook/useFileMutation";
import { LoadingButton } from "@mui/lab";

const baseStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const MyDropzone = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
    },
    multiple: false,
  });

  const { mUpload } = useFileMutation();

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const files = acceptedFiles.map((file: any) => (
    <Stack
      direction="row"
      alignItems="center"
      key={file.path}
      spacing={1}
      sx={{ width: "100" }}
    >
      <Typography
        sx={{
          flex: 1,
          minWidth: 0,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {file.path}
      </Typography>
      <Typography sx={{ flexShrink: 0 }}>{file.size} bytes</Typography>
    </Stack>
  ));

  const handleSubmit = () => {
    mUpload.mutate({ file: acceptedFiles?.[0] });
  };

  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>

        <>
          <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}>
            Files
          </Typography>
          {files}
        </>
      </div>

      <LoadingButton
        loading={mUpload.isPending}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </LoadingButton>
    </>
  );
};

export default MyDropzone;
