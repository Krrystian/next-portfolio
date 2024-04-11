import { createSlice } from "@reduxjs/toolkit";

interface dboardState {
  addSkillModal: boolean;
  showMessageModal: {
    show: boolean;
    body: {
      id: string;
      name: string;
      email: string;
      message: string;
    };
  };
  addProjectModal: boolean;
  showMenu: boolean;
}
const initialState: dboardState = {
  addSkillModal: false,
  showMessageModal: {
    show: false,
    body: {
      id: "",
      name: "",
      email: "",
      message: "",
    },
  },
  addProjectModal: false,
  showMenu: false,
};

export const dboardSlice = createSlice({
  name: "dboard",
  initialState,
  reducers: {
    toggleAddSkillModal: (state) => {
      state.addSkillModal = !state.addSkillModal;
    },
    toggleShowMessageModal: (state, action) => {
      state.showMessageModal.show = !state.showMessageModal.show;
      state.showMessageModal.body = action.payload;
    },
    toggleProjectModal: (state) => {
      state.addProjectModal = !state.addProjectModal;
    },
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const {
  toggleAddSkillModal,
  toggleShowMessageModal,
  toggleProjectModal,
  toggleMenu,
} = dboardSlice.actions;

export default dboardSlice.reducer;
