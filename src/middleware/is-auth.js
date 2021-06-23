const jwt = require('jsonwebtoken')


module.exports = (req, _, next) => {
    //const authHeader = req.get('Authorization');
    console.log(req.cookies);
    next();
    /*if (!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1];
    if(!token || token == ""){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, 'tyleralgigimadethis')
    }catch{
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();*/
}