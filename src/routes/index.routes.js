import { Router } from "express";

import { 
    renderTask, 
    createTask, 
    renderTaskEdit, 
    editTask, 
    deleteTask, 
    doneTask 
} from '../controllers/tasks.controller';

const router = Router();

router.get('/', renderTask);
router.post('/tasks/add', createTask);
router.get('/edit/:id', renderTaskEdit);
router.post('/edit/:id', editTask);
router.get('/delete/:id', deleteTask );
router.get('/toggleDone/:id', doneTask);

export default router;