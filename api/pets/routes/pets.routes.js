import express from 'express';

import {
    listPets,
    getPet,
    editPet,
    addPet, 
    deletePet
} from '../controllers/pets.controllers.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Pet:
 *          type: object
 *          properties:
 *              id: 
 *                  type: integer
 *                  description: Pet id
 *              name: 
 *                  type: string
 *                  description: Pet name
 *              age: 
 *                  type: integer
 *                  description: Pet age
 *              type: 
 *                  type: integer
 *                  description: Pet type
 *              breed: 
 *                  type: string
 *                  description: Pet breed
 *          example:
 *              id: 1
 *              name: Rexaurus
 *              age: 3
 *              type: dog
 *              breed: labrador
 */

/**
 * @swagger
 * /pets:
 *  get:
 *      summary: Get all pets
 *      description: Get all pets
 *      responses:
 *          200:
 *              description: success
 *          500:
 *              description: Internal Server Error
 */
router.get('/', listPets);

/**
 * @swagger
 *  /pets/{id}:
 *      get:
 *          summary: Get pet detail
 *          description: Get pet detail
 *          parameters: 
 *              - in: path
 *                name: id
 *                schema:
 *                    type: integer
 *                required: true
 *                description: Pet id
 *          responses: 
 *              200: 
 *                  description: Success
 *              500:
 *                  description: Internal Server Error
 */
router.get('/:id', getPet);

/**
 * @swagger
 *  /pets/{id}:
 *      put:
 *          summary: Edit pet
 *          description: Edit pet
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: integer
 *                required: true
 *                description: Pet id
 *          requestBody:
 *              description: A JSON object containing pet information
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Pet'
 *                      example: 
 *                          name: Rexaurus
 *                          age: 12
 *                          type: dog
 *                          breed: labrador
 *          responses:
 *              200:
 *                  description: Success
 *              500: 
 *                  description: Internal Server Error
 */
router.put('/:id', editPet);

/**
 * @swagger
 * /pets:
 *  post:
 *      summary: Add pet
 *      description: Add pet
 *      requestBody:
 *          description: A JSON object containing pet information
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Pet'
 *                  example:
 *                      name: Rexaurus
 *                      age: 12
 *                      type: dog
 *                      breed: labrador
 *      responses:
 *          200: 
 *              description: Success
 *          500:
 *              description: Internal Server Error
 */
router.post('/', addPet);

/**
 * @swagger
 * /pets/{id}:
 *  delete:
 *      summary: Delete pet
 *      description: Delete pet
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Pet id
 *      responses: 
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 */
router.delete('/:id', deletePet);

export default router;