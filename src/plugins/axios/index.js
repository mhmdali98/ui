import Vue from "vue";

import Axios from "axios";

const http = Axios.create({
    baseURL: "http://185.141.63.206/api/"
});

Vue.$http = http;
