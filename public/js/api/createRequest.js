/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    let url;
    let data;
    if (options.method) {
        data = options.data;
        url = options.url;
        xhr.responseType = "json";
        xhr.withCredentials = true;

        if (options.method === "GET") {
            url = url + "?"
            for (value in options.data) {
                url = url + value + "=" + options.data[value] + "&";
            }
            xhr.open(options.method, url);
            xhr.send();
        } else {
            let formData = new FormData;
            for (value in options.data) {
                formData.append(value, options.data[value]);
        }
        xhr.open(options.method, url);
        xhr.send(formData);
        }
        response = xhr.response;

        callback: (err, response) => {
            if(err) {
                console.log(xhr.response.error);
            } else {
                console.log(xhr.response.success);
            }
        }
    }
    try {
        xhr.open(options.method, url);
        xhr.send(); 
        xhr.send(formData); 
    } catch (error) {
        options.callback(error, xhr.response);
    }

    xhr.addEventListener("load", () => {
        options.callback(xhr.response);
    })
};
