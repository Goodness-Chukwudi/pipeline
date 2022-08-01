import axios from "axios";
import dataService from "./DataService";
import EventEmitter from "./EventEmitter";
import {useNavigate} from "react-router-dom"


class HttpService {

    config;
    baseUrl = "http://localhost:5500/api/v1"
    constructor() {
        const token  = dataService.getData("__pipeline__app__token");
        this.config = {
            headers: { Authorization: `Bearer ${token}` }
        };
      }
    
    get(url) {
        const endpoint = this.baseUrl + url;
        return new Promise((resolve, reject) => {
            this.startSpinner();
            axios.get(endpoint, this.config)
                .then((data) => {
                    this.stopSpinner();
                    resolve(data);
                })
                .catch((e) => {
                    this.stopSpinner();
                    this.handleError(e);
                });
        });
    }

    search(url, params) {
        const endpoint = this.baseUrl + url + this.objectToQueryString(params);
        return new Promise((resolve, reject) => {
            this.startSpinner();
            axios.get(endpoint, this.config)
                .then((data) => {
                    this.stopSpinner();
                    resolve(data);
                })
                .catch((e) => {
                    this.stopSpinner();
                    this.handleError(e);
                });
        });
    }

    delete(url) {
        const endpoint = this.baseUrl + url;
        return new Promise((resolve, reject) => {
            this.startSpinner();
            axios.delete(endpoint, this.config)
                .then((data) => {
                    this.stopSpinner();
                    resolve(data);
                })
                .catch((e) => {
                    this.stopSpinner();
                    this.handleError(e);
                });
        });
    }

    post(url, data) {
        const endpoint = this.baseUrl + url;
        return new Promise((resolve, reject) => {
            this.startSpinner();
            axios.post(endpoint, data, this.config)
                .then((data) => {                   
                    this.stopSpinner();
                    resolve(data);
                })
                .catch((e) => {
                    this.stopSpinner();
                    this.handleError(e);
                });
        });
    }

    put(url, data) {
        const endpoint = this.baseUrl + url;
        return new Promise((resolve, reject) => {
            this.startSpinner();
            axios.put(endpoint, data, this.config)
                .then((data) => {
                    this.stopSpinner();
                    resolve(data);
                })
                .catch((e) => {
                    this.stopSpinner();
                    this.handleError(e);
                });
        });
    }

    patch(url, data) {
        const endpoint = this.baseUrl + url;
        return new Promise((resolve, reject) => {
            this.startSpinner();
            axios.patch(endpoint, data, this.config)
                .then((data) => {
                    this.stopSpinner();
                    resolve(data);
                })
                .catch((e) => {
                    this.stopSpinner();
                    this.handleError(e);
                });
        });
    }

    objectToQueryString(obj) {
        let str = [];
        for (let key in obj)
          if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
          }
        const query = "?" + str.join("&");
        return query;
    }

    handleError(e) {
        EventEmitter.emit('error', e.response.data);
        setTimeout(() => {
            EventEmitter.emit('error', null);
            if (e.response.status == 401) {
                window.location = "/login"
            }
        }, 3000);
    }

    stopSpinner() {
        EventEmitter.emit('loading', false);
    }

    startSpinner() {
        EventEmitter.emit('loading', true);
    }
}

export default new HttpService();