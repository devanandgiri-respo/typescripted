import request from 'supertest';

import app from '../app'


describe("check api",()=>{
    it('working on', async ()=>{
        const result = await request(app).get('/')
        expect(result.statusCode).toBe(200)
        expect(result.body).toHaveProperty('message')
        expect(result.body).toEqual({message: "User is Created"})
    })
})