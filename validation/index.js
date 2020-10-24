exports.userSignupValidator = (req, res, next) => {
    req.check('name', "Name is required").notEmpty();
    req.check('surname', "Surname is required").notEmpty();
    req.check('email')
       .notEmpty()
       .withMessage("Email is required")
       .isEmail()
       .withMessage("Please enter a valid email address");
    req.check('password', "Password is required").notEmpty();

    const errors = req.validationErrors();
    
    if(errors) {
        const firstError = errors.map(err => err.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}   

exports.userLoginValidator = (req, res, next) => {
    req.check('email')
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email address");
    req.check('password', "Password is required").notEmpty();
    const errors = req.validationErrors();
    
    if(errors) {
        const firstError = errors.map(err => err.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}   

exports.tweetValidator = (req, res, next) => {
    req.check('message')
        .notEmpty()
        .withMessage("Tweet cannot be empty");
    const errors = req.validationErrors();
    
    if(errors) {
        const firstError = errors.map(err => err.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}   