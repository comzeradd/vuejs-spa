import axios from 'axios';

export default class Api {
    static getItems() {
        return axios.get('items.json');
    }

    static getItem(id) {
        return axios.get('items.json')
        .then(function (res) {
            return res.data.filter(function (e) {
                return e.id==id;
            });
        });
    }
}
