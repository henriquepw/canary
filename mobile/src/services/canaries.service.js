import axios from "axios";
import { server, showError } from "../common";
import { AsyncStorage } from "react-native";

function getAllCanaries() {
  return axios.get(`${server}/canaries`);
}

function getCanariesByUser() {
  return AsyncStorage.getItem("userData")
    .then(json => JSON.parse(json) || {})
    .then(userData => axios.get(`${server}/canaries/user/${userData.id}`));
}

function getCanary(canaryId) {
  return axios.get(`${server}/canaries/${canaryId}`);
}

function registerCanary(canary) {}

function deleteCanary(canary) {
  return axios.delete(`${server}/canaries/${canary}`);
}

export {
  getAllCanaries,
  getCanary,
  registerCanary,
  deleteCanary,
  getCanariesByUser
};
