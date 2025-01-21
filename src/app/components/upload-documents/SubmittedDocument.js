"use client";
import React, { useState } from "react";
import DisplayDocument from "./DisplayDocument";
import EditDocument from "./EditDocument";

function SubmittedDocument({ doc, department }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div>
      {!isEditOpen ? (
        <DisplayDocument doc={doc} setIsEditOpen={setIsEditOpen} />
      ) : (
        <EditDocument
          doc={doc}
          department={department}
          setIsEditOpen={setIsEditOpen}
        />
      )}
    </div>
  );
}

export default SubmittedDocument;
