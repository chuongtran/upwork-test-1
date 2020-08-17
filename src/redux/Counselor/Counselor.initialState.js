export const initialState = {
  filter: {
    language: null,
    target: null,
    gender: null,
    type: null,
  },
  booking: {
    view: 'month',
    selectedSlot: null,
    currentDate: new Date(),
  },
};
