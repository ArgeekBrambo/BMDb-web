function errorHandler(err, req, res, next) {
    console.log(err);
    // console.log(err.name, '<<<<<');
    // console.log(err.errors.message, '<<<<<');
    let status = 500;
    let message = "Internal Server Error";

    switch(err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400;
            message = err.errors[0].message;
            break;

        case "LoginFailed":
            status = 400;
            message = "Invalid email or password";
            break;
    }

    res.status(status).json({ message });
}

module.exports = errorHandler;
