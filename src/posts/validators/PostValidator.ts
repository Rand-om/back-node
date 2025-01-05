import { body } from 'express-validator';

export const postValidator = [
  body('nombre').isString().notEmpty().withMessage('Nombre is required'),
  body('descripcion').isString().notEmpty().withMessage('Descripcion is required')
];
