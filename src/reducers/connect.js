// user may be logged in and disconnected due to Firebase offline mode
export const connect = (state, { value }) => ({
  connected: value,
  status: value ? 'connected' : 'disconnected'
})