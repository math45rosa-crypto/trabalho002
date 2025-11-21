class BaseController {
    sendResponse(res, status, data) {
        return res.status(status).json({
            success: status < 400,
            data,
        });
    }

    sendError(res, status, message, details = null) {
        return res.status(status).json({
            success: false,
            message,
            details,
        });
    }
}

module.exports = new BaseController();
