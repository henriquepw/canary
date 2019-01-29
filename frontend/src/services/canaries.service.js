import axios from "axios";
import { server, showError } from "../common";
import { AsyncStorage } from "react-native"

const text1 = {
    temperature: "temperature text 1",
    humidity: "humidity text 1",
    co: "co text 1",
    co2: "co2 text 1",
    nh3: "nh3 text 1"
};

const text2 = {
    temperature: "temperature text 2",
    humidity: "humidity text 2",
    co: "co text 2",
    co2: "co2 text 2",
    nh3: "nh3 text 2"
};

const text3 = {
    temperature: "temperature text 3",
    humidity: "humidity text 3",
    co: "co text 3",
    co2: "co2 text 3",
    nh3: "nh3 text 3"
};

const status1 = {
    temperature: 1,
    humidity: 30,
    co: 1,
    co2: 1,
    nh3: 1
};

const status2 = {
    temperature: 2,
    humidity: 70,
    co: 2,
    co2: 2,
    nh3: 2
};

const status3 = {
    temperature: 3,
    humidity: 11,
    co: 3,
    co2: 3,
    nh3: 3
};

const canaries = [
    {
        label: "Canario1",
        value: { text: text1, id: 1, status: status1 }
    },
    {
        label: "Canario2",
        value: { text: text2, id: 2, status: status2 }
    },
    {
        label: "Canario3",
        value: { text: text3, id: 3, status: status3 }
    }
];

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

function deleteCanary(canary) {}

export { getAllCanaries, getCanary, registerCanary, deleteCanary, getCanariesByUser };
