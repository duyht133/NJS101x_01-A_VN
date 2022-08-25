// tạo middleware để bảo vệ router
//nhảy ra trang login nếu người dùng chưa login
module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}