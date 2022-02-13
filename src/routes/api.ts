import { Router } from 'express';

const UserController = require('../controllers/userController')
const CompanyController = require('../controllers/companyController')
const UnitController = require('../controllers/unitController')
const AssetController = require('../controllers/assetController')

const router = Router();

router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getOne);
router.put('/users/:id', UserController.putOne);
router.delete('/users/:id', UserController.deleteOne);
router.post('/users', UserController.postOne);

router.get('/companies', CompanyController.getAll);
router.get('/companies/:id', CompanyController.getOne);
router.put('/companies/:id', CompanyController.putOne);
router.delete('/companies/:id', CompanyController.deleteOne);
router.post('/companies', CompanyController.postOne);

router.get('/units', UnitController.getAll);
router.get('/units/:id', UnitController.getOne);
router.put('/units/:id', UnitController.putOne);
router.delete('/units/:id', UnitController.deleteOne);
router.post('/units', UnitController.postOne);

router.get('/assets', AssetController.getAll);
router.get('/assets/:id', AssetController.getOne);
router.put('/assets/:id', AssetController.putOne);
router.delete('/assets/:id', AssetController.deleteOne);
router.post('/assets', AssetController.postOne);

export default router;