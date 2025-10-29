import axios from "axios";

// Base URLs
const API_URL = "http://127.0.0.1:5501";
const API_URL_AUTH = `${API_URL}/auth`;
const API_URL_MOOD = `${API_URL}/mood`;
const API_URL_JOURNALS = `${API_URL}/journals`;
const API_URL_COMMUNITY = `${API_URL}/community`;


// Ensure JSON headers and CORSsupport
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;


// Login user
export async function loginUser(credentials) {
  // expects { email, password }
  return await axios.post(`${API_URL_AUTH}/login`, credentials);
}

// Register new user
export async function registerUser(userData) {
  // expects { name, email, password }
  return await axios.post(`${API_URL_AUTH}/register`, userData);
}

// Logout user
export async function logoutUser() {
  return await axios.post(`${API_URL_AUTH}/logout`);
}

// forgot pasword
export async function forgotPassword() {
  return await axios.post(`${API_URL_AUTH}/forgot-password`);
}
export async function resetPassword() {
  return await axios.post(`${API_URL_AUTH}/reset-password`);
}

// MOOD API
export async function addMood(user_id,emotional_lable) {
  return await axios.post(`${API_URL_MOOD}/addMood`);
}
export async function getMood(user_id) {
  return await axios.post(`${API_URL_MOOD}/${user_id}/getMood`);
}

// JOURNALS API
export async function getJournals(user_id) {
  return await axios.post(`${API_URL_JOURNALS}/journals`);
}
export async function addJournal(user_id) {
  return await axios.post(`${API_URL_JOURNALS}/${id}/add_journal`);
}
export async function deleteOneJournals(id) {
  return await axios.post(`${API_URL_JOURNALS}/delete/${id}`);
}
export async function updateOneJournals(id) {
  return await axios.post(`${API_URL_JOURNALS}/update/${id}`);
}

// COMMUNITY API
export async function getCommunity(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/community`)
}
export async function createCommunity(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/create`)
}
export async function getCommunity(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/${community_id}/join`)
}
export async function getCommunity(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/${community_id}/leave`)
}

// MESSAGES
export async function getCommunity(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/${community_id}/messages`)
}
export async function getCommunityMessages(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/${community_id}/messages`)
}
export async function addCommunityMessage(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/${community_id}/messages`)
}
export async function sendDirectMessage(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/messages/direct`)
}
export async function getDirectMessage(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/messages/inbox/${user_id}`)
}
export async function readMessage(message_id){
    return await axios.post(`${API_URL_COMMUNITY}/messages/${message_id}/read`)
}
export async function connectUsers(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/connect`)
}
export async function listConnectedUsers(user_id){
    return await axios.post(`${API_URL_COMMUNITY}/connect/${user_id}`)
}

