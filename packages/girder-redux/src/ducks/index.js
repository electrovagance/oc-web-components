// AUTH

// Import actions
import {
  authenticate,
  setAuthenticating,
  invalidateToken,
  loadMe,
  loadOauthProviders,
  usernameLogin,
  showLoginOptions,
  showGirderLogin,
  testOauthEnabled,
  showNerscLogin,
  nerscLogin,
  setMe,
  setToken,
  loadApiKey
} from './auth';

// Import selectors
import {
  setRoot,
  getMe,
  getToken,
  getOauthProviders,
  isOauthEnabled,
  isAuthenticated,
  isAuthenticating,
  getShowLoginOptions,
  getShowGirderLogin,
  getShowNerscLogin,
  getApiKey
} from './auth';

// Import reducer
export {default as authReducer} from './auth';

export const authActions = {
  authenticate,
  invalidateToken,
  loadMe,
  loadOauthProviders,
  usernameLogin,
  showLoginOptions,
  showGirderLogin,
  testOauthEnabled,
  setAuthenticating,
  showNerscLogin,
  nerscLogin,
  setMe,
  setToken,
  loadApiKey
}

export const authSelectors = {
  setRoot,
  getMe,
  getToken,
  getOauthProviders,
  isOauthEnabled,
  isAuthenticated,
  isAuthenticating,
  getShowLoginOptions,
  getShowGirderLogin,
  getShowNerscLogin,
  getApiKey
}


import { connectToNotifications, receiveNotification, eventSourceError } from './notifications';
export const notificationsActions = {
  connectToNotifications,
  receiveNotification,
  eventSourceError
}

export const notificationsSelectors = {};

export {default as notificationsReducer} from './notifications';
//ADMIN
//Import actions
import {
  fetchUsersList,
  receiveUsersList,
  fetchUsersListFailed,
  fetchGroupsList,
  receiveGroupsList,
  fetchGroupsListFailed,
  fetchMembersList,
  receiveMembersList,
  fetchMembersListFailed,
  setCurrentGroup,
  removeMember,
  removeMemberFailed,
  addMember,
  addMemberFailed,
  removeGroup,
  removeGroupFailed
} from './admin';

//Import Selectors
import {
  initRoot,
  getUsersByIds,
  getGroupsByIds,
  getMembersByIds,
  getCurrentGroup,
  getUserSearch
} from './admin';

//Import reducer
export {default as adminReducer} from './admin';

export const adminActions = {
  fetchUsersList,
  receiveUsersList,
  fetchUsersListFailed,
  fetchGroupsList,
  receiveGroupsList,
  fetchGroupsListFailed,
  fetchMembersList,
  receiveMembersList,
  fetchMembersListFailed,
  setCurrentGroup,
  removeMember,
  removeMemberFailed,
  addMember,
  addMemberFailed,
  removeGroup,
  removeGroupFailed
}

export const adminSelectors = {
  initRoot,
  getUsersByIds,
  getGroupsByIds,
  getMembersByIds,
  getCurrentGroup,
  getUserSearch
}

//USER
//Import actions
import {
  fetchUserData,
  userDataReceived,
  fetchUserDataFailed,
  updateUserInformation,
  userInformationUpdated,
  userUpdateFailed,
  linkToTwitter,
  twitterLinked,
  linkToTwitterFailed,
  linkToOrcid,
  orcidLinked,
  linkToOrcidFailed
} from './user';

//Import Selectors
import {
  createRoot,
  getUserData,
  getTwitterId,
  getOrcidId
} from './user';

//Import reducer
export {default as userReducer} from './user';

export const userActions = {
  fetchUserData,
  userDataReceived,
  fetchUserDataFailed,
  updateUserInformation,
  userInformationUpdated,
  userUpdateFailed,
  linkToTwitter,
  twitterLinked,
  linkToTwitterFailed,
  linkToOrcid,
  orcidLinked,
  linkToOrcidFailed
}

export const userSelectors = {
  createRoot,
  getUserData,
  getTwitterId,
  getOrcidId
}
