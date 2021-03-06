"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan", res);
};

exports.tampilsemuamahasiswa = function (req, res) {
    connection.query("SELECT * FROM mahasiswa", function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id = ?", [id], function (
        error,
        rows,
        fileds
    ) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};
