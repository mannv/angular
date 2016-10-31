"use strict";
/**
 * Created by Code on 10/31/2016.
 */
var Client = (function () {
    function Client(name, country, status, email, phone) {
        this.name = name;
        this.country = country;
        this.status = status;
        this.email = email;
        this.phone = phone;
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map