// "use client";
// import { create } from "zustand";

// const useUploadDocumentStore = create((set) => ({
//   businessType: localStorage.getItem("businessType") || null,
//   setBusinessType: (type) => {
//     localStorage.setItem("businessType", type);
//     set({ businessType: type });
//   }, //set from CompanyBranchCard component

//   selectedBranch: JSON.parse(localStorage.getItem("selectedBranch")) || {},
//   setSelectedBranch: (branch) => {
//     localStorage.setItem("selectedBranch", JSON.stringify(branch));
//     set({ selectedBranch: branch });
//   }, //set from CompanyBranchCard component

//   departmentList: [],
//   setDepartmentList: (depts) =>
//     set({
//       departmentList: depts,
//     }), // set on upload-documents page load

//   branchDocuments: [],
//   setBranchDocuments: (docs) =>
//     set({
//       branchDocuments: docs,
//     }), // set on upload-documents page load

//   selectedDepartmentName: null,
//   setSelectedDepartmentName: (name) => set({ selectedDepartmentName: name }), //set this value to show only the form for a single input component corresponding to the department

//   selectedDocumentId: null,
//   setSelectedDocumentId: (id) => set({ selectedDocumentId: id }), // for edit and delete document

//   renderDocumentList: false,
//   setRenderDocumentList: () =>
//     set((state) => ({ renderDocumentList: !state.renderDocumentList })),

//   isDeleteDocumentOpen: false,
//   setIsDeleteDocumentOpen: (val) => set({ isDeleteDocumentOpen: val }), //set to delete document

//   selectedDocumentIdToDelete: null,
//   setSelectedDocumentIdToDelete: (id) =>
//     set({ selectedDocumentIdToDelete: id }),
// }));

// export default useUploadDocumentStore;

"use client";
import { create } from "zustand";

const useUploadDocumentStore = create((set) => ({
  businessType: null,
  selectedBranch: {},
  departmentList: [],
  branchDocuments: [],
  selectedDepartmentName: null,
  selectedDocumentId: null,
  renderDocumentList: false,
  isDeleteDocumentOpen: false,
  selectedDocumentIdToDelete: null,

  initializeStore: () => {
    // Initialize state from localStorage on the client
    if (typeof window !== "undefined") {
      set({
        businessType: localStorage.getItem("businessType") || null,
        selectedBranch:
          JSON.parse(localStorage.getItem("selectedBranch")) || {},
      });
    }
  },

  setBusinessType: (type) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("businessType", type);
    }
    set({ businessType: type });
  },

  setSelectedBranch: (branch) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedBranch", JSON.stringify(branch));
    }
    set({ selectedBranch: branch });
  },

  setDepartmentList: (depts) => set({ departmentList: depts }),
  setBranchDocuments: (docs) => set({ branchDocuments: docs }),
  setSelectedDepartmentName: (name) => set({ selectedDepartmentName: name }),
  setSelectedDocumentId: (id) => set({ selectedDocumentId: id }),
  setRenderDocumentList: () =>
    set((state) => ({ renderDocumentList: !state.renderDocumentList })),
  setIsDeleteDocumentOpen: (val) => set({ isDeleteDocumentOpen: val }),
  setSelectedDocumentIdToDelete: (id) =>
    set({ selectedDocumentIdToDelete: id }),
}));

export default useUploadDocumentStore;
