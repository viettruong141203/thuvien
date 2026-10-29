// Data.js - API Wrapper
const CLensData = {
    API_URL: 'https://script.google.com/macros/s/AKfycby7QlHVDoWr7aQJMzLrfMWaCukXkFisq3A1BdLhyqcbdnPq2JvsJ0xgmkXrCbYBAKMtRQ/exec',

    upload: function(fileBase64, fileName, mimeType) {
        return fetch(this.API_URL, { 
            method: 'POST', 
            body: JSON.stringify({ fileName: fileName, mimeType: mimeType, base64: fileBase64 }) 
        }).then(res => res.json());
    },

    getGallery: function() {
        return fetch(this.API_URL + "?action=gallery").then(res => res.json());
    },

    getImage: function(id) {
        return fetch(this.API_URL + "?id=" + id).then(res => res.json());
    }
};
