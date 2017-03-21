export const callApi = (url, opts) => {
    if (opts.body) {
        opts.body = JSON.stringify(opts.body);
    }
    return fetch(apiUrl + url, {
        ...opts,
        method: opts.method || 'GET',
        headers: {
            ...opts.headers
        },
    }).then(res => {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        } else {
            throw res._bodyText;
        }
    })
}
