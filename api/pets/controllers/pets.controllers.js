import { getItem, listItems, editItem, addItem, deleteItem } from '../models/pets.models.js';

export const getPet = (req, res) => {
    try {
        const result = getItem(parseInt(req.params.id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const listPets = (req, res) => {
    try {
        const result = listItems();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const editPet = (req, res) => {
    try {
        const result = editItem(parseInt(req.params.id), req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addPet = (req, res) => {
    try {
        const result = addItem(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deletePet = (req, res) => {
    try {
        const result = deleteItem(parseInt(req.params.id));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error);
    }
}