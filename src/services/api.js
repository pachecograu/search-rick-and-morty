import axios from "axios";

const apis = {
    urlBase: "https://rickandmortyapi.com/api",
    character: {
        url: "/character/",
        fn: async (name) => {
            let res = {
                success: {},
                error: {}
            }, queryName = '';
            if (!!name) {
                queryName = '?name=' + name
            }
            await axios({
                method: 'get',
                url: apis.urlBase + apis.character.url + queryName
            }).then(function (response) {
                res.success = response.data;
            }).catch(function (error) {
                console.log(error.response);
                res.error = error.response;
            });
            console.log(res);
            return res;
        }
    },
    detail: {
        url: "/character/",
        fn: async (id) => {
            let res = {
                success: {},
                error: {}
            };
            await axios({
                method: 'get',
                url: apis.urlBase + apis.detail.url + id
            }).then(function (response) {
                res.success = response.data;
            }).catch(function (error) {
                console.log(error.response);
                res.error = error.response;
            });
            console.log(res);
            return res;
        }
    },
    location: {
        url: "/location/"
    },
    episode: {
        url: "/episode/"
    },
    paginator: {
        url: "/character/",
        fn: async (url, number) => {
            console.log(url, number);
            let res = {
                success: {},
                error: {}
            };
            if (!!number) {
                url = apis.urlBase + apis.paginator.url + '?page=' + number
            };
            await axios({
                method: 'get',
                url: url
            }).then(function (response) {
                res.success = response.data;
            }).catch(function (error) {
                console.log(error.response);
                res.error = error.response;
            });
            console.log(res);
            return res;
        }
    },
}

export default apis;