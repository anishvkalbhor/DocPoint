import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload, FaImage } from "react-icons/fa";

const convertFileToUrl = (file) => {
  return URL.createObjectURL(file);
};

const FileUploader = ({ files, onChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="file-upload border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors duration-200"
    >
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <div className="relative">
          {files.map((file, index) => (
            <img
              key={index}
              src={convertFileToUrl(file)}
              alt={`uploaded image ${index + 1}`}
              className="max-h-[400px] w-full object-cover rounded-md mb-2"
            />
          ))}
          <FaImage className="absolute top-2 right-2 text-white text-2xl" />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <FaUpload className="text-5xl mb-4 text-gray-400" />
          <div className="file-upload_label">
            <p className="text-16-medium mb-2">
              <span className="text-green-500 font-semibold">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-14-regular text-gray-500">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;