import supertest from 'supertest';
import server from '../../app.js';
import db from '../../db/db.js';

const requestWithSupertest = supertest(server);

describe('GET "/"', () => {
    test('GET "/" returns all pets', async () => {
        const res = await requestWithSupertest.get('/pets');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual(db?.pets);
    });
});

describe('GET "/:id"', () => {
    test('GET "/:id" returns given pet', async () => {
        const res = await requestWithSupertest.get('/pets/1');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual(db?.pets?.[0]);
    });
});

describe('PUT "/:id"', () => {
    test('PUT "/:id" updates pet and returns it', async () => {
        const obj = {
            id: 1,
            name: 'Rexo',
            type: 'dogo',
            age: 4,
            breed: 'doberman'
        }

        const res = await requestWithSupertest.put('/pets/1').send(obj);

        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual(obj);
    });
});

describe('POST "/"', () => {
    test('POST "/" adds new pet and returns the added item', async () => {
        const obj = {
            name: 'Salame',
            type: 'cat',
            age: 6,
            breed: 'pinky'
        }

        const res = await requestWithSupertest.post('/pets').send(obj);

        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual(db?.pets[db.pets.length - 1]);
    });
});

describe('DELETE "/:id"', () => {
    test('DELETE "/:id" deletes given pet and returns updated list', async () => {
        const res = await requestWithSupertest.delete('/pets/2');

        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual(db?.pets);
        expect(res.body?.findIndex( obj => obj.id === 2 )).toEqual(-1);
    });
});
