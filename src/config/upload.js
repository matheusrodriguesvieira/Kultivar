const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const nomeBase = path.basename(file.originalname, ext);

            cb(null, `${nomeBase}-${Date.now()}${ext}`);
        },
    })
};