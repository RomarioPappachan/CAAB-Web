"use client";
import React, { useState } from "react";
import DisplayDocument from "./DisplayDocument";
import EditDocument from "./EditDocument";

function SubmittedDocument({ index, doc, department }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div>
      {!isEditOpen ? (
        <DisplayDocument
          index={index}
          doc={doc}
          setIsEditOpen={setIsEditOpen}
        />
      ) : (
        <EditDocument
          index={index}
          doc={doc}
          department={department}
          setIsEditOpen={setIsEditOpen}
        />
      )}
    </div>
  );
}

export default SubmittedDocument;
