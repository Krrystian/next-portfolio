"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import React, { useCallback } from "react";

interface ImageUploadProps {
  callback: (files: string[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ callback }) => {
  const handleUpload = useCallback(
    (value: string[]) => {
      callback(value);
    },
    [callback]
  );

  return (
    <UploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        const files = res.map((f) => f.url);
        handleUpload(files);
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default ImageUpload;
