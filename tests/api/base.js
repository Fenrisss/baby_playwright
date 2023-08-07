require('chai/register-should.js');
const chai = require('chai');
const chaiHttp = require('chai-http');


const SERVER_URL = process.env.SERVER_URL
chai.use(chaiHttp);
const request = chai.request("https://staging.zymran.com");

const LogResponseError = async (response) => {
    if (response.body.data && response.body.data.error) {
        const error_text = {
            status_code: response.status,
            request_method: response.request.method,
            request_url: response.request.url,
            request_data: response.request.data,
            error_details: response.body.data.error.details
        };
        throw Error(JSON.stringify(error_text, null, 4));
    };
    return response;
};


module.exports = {
    LogResponseError,
    request
};
