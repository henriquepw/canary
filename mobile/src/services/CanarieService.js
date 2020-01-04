import axios from "axios";
import { server, showError } from "../common";

export default () => {
  const insertCanary = async canary => {
    axios
      .post(`${server}/canaries/`, canary)
      .then(res => showInfo("Cadastrado com sucesso"))
      .catch(err => showError(err));
  };

  const getAllCanariesByUser = async user_id => {
    try {
      const res = await axios.get(`${server}/canaries/user/${user_id}`);
      return res.data;
    } catch (err) {
      showError(err);
    }
  };

  const getAllCanariesByOwner = async owner_id => {
    try {
      const res = await axios.get(`${server}/canaries/owner/${owner_id}`);
      return res.data;
    } catch (err) {
      showError(err);
    }
  };

  const getAllCanaries = async _ => {
    try {
      const res = await axios.get(`${server}/canaries`);
      return res.data;
    } catch (err) {
      showError(err);
    }
  };

  return {
    insertCanary,
    getAllCanaries,
    getAllCanariesByUser,
    getAllCanariesByOwner
  };
};
