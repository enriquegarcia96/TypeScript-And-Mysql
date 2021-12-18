import { Router } from 'express';
import { delteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios';

const router = Router();


router.get('/', getUsuarios );
router.get('/:id', getUsuario );
router.post('/', postUsuario );
router.put('/:id', putUsuario );
router.delete('/:id', delteUsuario );

export default router;