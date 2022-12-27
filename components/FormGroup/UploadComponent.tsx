import { ErrorMessage } from "formik";
import React from "react";
import { useDropzone } from "react-dropzone";
import TextError from "./TextError";

const UploadComponent = (props) => {
  const { label, name, ref, setFieldValue, value, acceptedFiles, ...rest } =
    props;

  const UploadSection = ({ setFieldValue }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: acceptedFiles ? acceptedFiles : "",
      multiple: false,
      onDrop: (acceptedFiles) => {
        setFieldValue(`${name}`, acceptedFiles);
      },
    });
    return (
      <div className="upload-container">
        <div {...getRootProps()} className="upload-root">
          <input className="upload-input" {...getInputProps()} />
          {value ? (
            value.map((file, i) => (
              <p key={i} className="upload-message">
                {`File: ${file.name}`}
                <br />
                {`Type: ${file.type}    Size: ${file.size} bytes`}
              </p>
            ))
          ) : (
            <>
              {isDragActive ? (
                <p className="upload-message">Drop the file here ...</p>
              ) : (
                <p className="upload-message">
                  Drag & drop your file here, or click to select file
                </p>
              )}
              {acceptedFiles && (
                <p className="upload-message">
                  {label.acceptedFiles
                    ? `${label.acceptedFiles} : ${acceptedFiles}`
                    : `AcceptedFiles: ${acceptedFiles}`}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <UploadSection setFieldValue={setFieldValue} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default UploadComponent;
