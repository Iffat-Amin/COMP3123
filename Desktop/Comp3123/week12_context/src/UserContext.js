import React from 'react';

const UserContext = React.createContext();

// Rename exports for convention and clarity
export const UserProvider = UserContext.Provider; // Use uppercase
export const UserConsumer = UserContext.Consumer; // Use uppercase

export default UserContext;