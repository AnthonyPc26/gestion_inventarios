"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
class BaseResponse {
    constructor(success, message, status, data) {
        this.success = success;
        this.message = message;
        this.status = status;
        this.data = data;
    }
    static success(data, message = 'OK') {
        return new BaseResponse(true, message, 200, data);
    }
    static error(message, status = 500) {
        return new BaseResponse(false, message, status, null);
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=base-response.js.map