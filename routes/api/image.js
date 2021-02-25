const express = require("express");
const router = express.Router();
const passport = require("passport");
const upload = require('./images_upload_aws');
const singleUpload = upload.single('image');



router.post('/uploadImage', (req, res) => {
    singleUpload(req, res, function (err) {
        if (err) {
            return res.status(422).json({ errors: err.message });
        }
        return res.json({ 'imageUrl': req.file.location, 'postId': req.body.postId, 'fileName': req.file.originalname });
    })
});

module.exports = router
