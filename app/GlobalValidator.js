"use strict";
/**
 * Created by Code on 10/31/2016.
 */
var GlobalValidator = (function () {
    function GlobalValidator() {
    }
    GlobalValidator.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "mail": true };
        }
        return null;
    };
    return GlobalValidator;
}());
exports.GlobalValidator = GlobalValidator;
//# sourceMappingURL=GlobalValidator.js.map