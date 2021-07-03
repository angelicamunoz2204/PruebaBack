const {Router} = require('express');
const router = Router();
const controller = require('../controllers/controllers')

router.get('/usuario', controller.getUsuarios);
router.get('/usuario/:id', controller.getUsersById);
router.post('/usuario', controller.createUser);
router.delete('/usuario/:id', controller.deleteUser);
router.put('/usuario/:id', controller.updateUser);

module.exports = router;