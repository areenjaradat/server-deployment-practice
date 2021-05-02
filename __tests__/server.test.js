'use strict';

const server=require('../server');

const superTest=require('supertest');
const serverRequest=superTest(server.app);

describe('testing server',()=>{
  it('handle not found routes',async ()=>{
    let response= await serverRequest.get('/not-found');
    expect(response.status).toEqual(404);
  });
  it('handle error',async ()=>{
    let response= await serverRequest.get('/badRequet');
    expect(response.status).toEqual(500);
  });
  it('handle home route',async ()=>{
    let response= await serverRequest.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('i am work');
  });

});