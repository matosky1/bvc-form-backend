
const Register = require("../models/registerModels");

const GetDetails = (req, res) =>{
    const { id, fullName, address, status } = req.body;
    const register = new Register({
        id: id,
        fullName: fullName,
        address: address,
        status: status
    });
    
    register.save()
        .then(() => {
            // Redirect with data as URL parameters
            res.redirect(`http://127.0.0.1:5500/success/index.html?id=${id}&fullName=${fullName}&address=${address}&status=${status}`);
        })
        .catch((err) => {
            console.log(err);
        });
}
module.exports = GetDetails