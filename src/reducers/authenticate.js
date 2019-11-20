// user may be logged in and disconnected due to Firebase offline mode
// autologin is set to true in separate 'settings' action to set localStorage
export const authenticate = (state, { value, user, userRef }) => ({
  authenticated: value,
  status: value ? 'authenticated' : state.connected ? 'connected' : 'disconnected',
  user,
  userRef
})