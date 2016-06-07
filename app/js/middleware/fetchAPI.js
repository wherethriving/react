import 'isomorphic-fetch'

const API_ROOT = 'http://localhost:8080/cona-web/api/v1/';

exports.fetchAPI = (endpoint, options) => {
    options = options || {};
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    if (options.body) {
        options.body = JSON.stringify(options.body);
    }

    Object.assign(options.headers, {
        'content-type' : 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*',
    });

    const url = encodeURI((endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint);
  
    return fetch(url, options)
        .then( (response) => {
            let status = response.status;
            if (response.ok) {
                if ( status === 204) {
                    return {};
                }
                return response.json();
            } else {
                let status = response.status;
                return response.json()
                    .then((res) => {
                        return Promise.reject(res);
                    })
            }
        }) 
}
