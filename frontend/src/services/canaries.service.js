import axios from "axios";
import { server, showError } from "../common";
import { AsyncStorage } from "react-native";

function getAllCanaries() {
    return axios.get(`${server}/canaries`);
}

function getCanariesByUser(){
    return AsyncStorage.getItem("userData")
    .then(json => JSON.parse(json) || {})
    .then(userData => axios.get(`${server}/canaries/user/${userData.id}`));
}

function getCanary(canary) {}

function registerCanary(canary) {}

function deleteCanary(canary) {
    return axios.delete(`${server}/canaries/${canary}`);
}

export { getAllCanaries, getCanary, registerCanary, deleteCanary, getCanariesByUser };
