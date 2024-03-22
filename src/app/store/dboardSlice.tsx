import { createSlice } from "@reduxjs/toolkit";

interface dboardState {
  addSkillModal: boolean;
}
const initialState: dboardState = {
  addSkillModal: false,
};

export const dboardSlice = createSlice({
  name: "dboard",
  initialState,
  reducers: {
    toggleAddSkillModal: (state) => {
      state.addSkillModal = !state.addSkillModal;
      console.log("addSkillModal: ", state.addSkillModal);
    },
  },
});

export const { toggleAddSkillModal } = dboardSlice.actions;

export default dboardSlice.reducer;
