// Data.js - Bộ não xử lý dữ liệu của CLens

const CLensData = {
    // Link API đã chuẩn xác
    API_URL: 'https://script.google.com/macros/s/AKfycby7QlHVDoWr7aQJMzLrfMWaCukXkFisq3A1BdLhyqcbdnPq2JvsJ0xgmkXrCbYBAKMtRQ/exec',

    // Hàm Tải ảnh lên
    upload: function(fileBase64, fileName, mimeType) {
        return fetch(this.API_URL, { 
            method: 'POST', 
            body: JSON.stringify({ fileName: fileName, mimeType: mimeType, base64: fileBase64 }) 
        }).then(res => res.json());
    },

    // Hàm Lấy dữ liệu thư viện ảnh
    getGallery: function() {
        return fetch(this.API_URL + "?action=gallery").then(res => res.json());
    },

    // Hàm Lấy chi tiết 1 bức ảnh theo ID
    getImage: function(id) {
        return fetch(this.API_URL + "?id=" + id).then(res => res.json());
    }
};
