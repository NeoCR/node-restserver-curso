// =======================================
// Puerto
// =======================================
process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb://localhost:27017/cafe";
} else {
    urlDB = "mongodb+srv://admnode:Ez6r5RqvHOF01h12@nodejs-shk33.mongodb.net/cafe";
}

urlDB = "mongodb+srv://admnode:Ez6r5RqvHOF01h12@nodejs-shk33.mongodb.net/cafe";

process.env.URL_DB = urlDB;