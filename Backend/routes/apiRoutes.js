const { greet } = require('../controllers/greet');
const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { addpost } = require('../controllers/addpost');
const { getposts } = require('../controllers/getposts');
const { addfav } = require('../controllers/addfav');
const { getfavposts } = require('../controllers/getfavposts');
const { addmessage } = require('../controllers/addmessage');
const { getmessages } = require('../controllers/getmessages')
const { addrecmessage } =require('../controllers/addrecmessage')
const { getfriends } = require('../controllers/getfriends');
const { changepic } = require('../controllers/changepic');
const { deleteacc } = require('../controllers/deleteacc');
const { changepass } = require('../controllers/changepass');
const { addimage } = require('../controllers/addimage');
const { getimage } = require('../controllers/getimage');

const router = require('express').Router();

router.route('/').get(greet);
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/addpost').post(addpost)
router.route('/getposts').get(getposts)
router.route('/addfav').post(addfav)
router.route('/getfavposts').post(getfavposts)
router.route('/addmessage').post(addmessage)
router.route('/getmessages').post(getmessages)
router.route('/addrecmessage').post(addrecmessage)
router.route('/getfriends').post(getfriends)
router.route('/changepic').post(changepic)
router.route('/deleteacc').post(deleteacc)
router.route('/changepass').post(changepass)
router.route('/addimage').post(addimage)
router.route('/getimage').post(getimage)

module.exports = router;