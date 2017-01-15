class apiCLient {
    get(url) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open("GET", url);
            req.onload = () => {
                if (req.status == 200) {
                    resolve(req.response)
                }
                else {
                    reject(Error(req.statusText))
                }
            };
            req.onerror = () => {
                reject(Error("Network Error"))
            }
            req.send()
        })
    }
    post(url, obj) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            let data = JSON.stringify(obj);
            req.open("POST", url, true);
            req.setRequestHeader("Content-type", "application/json");
            req.onreadystatechange = function () {
                if (req.status === 200) {
                    resolve(req.statusText);
                }
            };
            req.onerror = () => {
                reject(Error("Network Error"))
            }
            req.send(data)
        })
    }
}

export default apiCLient