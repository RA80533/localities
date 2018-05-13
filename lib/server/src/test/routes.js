/**
 * TODO Write summary
 * 
 * TODO Write description
 */

import express from "express";
import request from "supertest";

const api = require("./../main/routes.js").api;
const www = require("./../main/routes.js").www;

describe("API host", function () {
	var router = express().use(api);
	
	describe("GET /", function () {
		it("should respond with a 404", function (done) {
			request(router)
				.get('/')
				.expect(404, done);
		});
	});
	
	// TODO Finish test case
	describe("POST /users", function () {
		it("should respond with a 201", function (done) {
			request(router)
				.post("/users")
				.expect(201, done);
		});
	});
	
	// TODO Finish test case
	describe("DELETE /users/:id", function () {
		it("should respond with a 204", function (done) {
			request(router)
				.delete("/users/:id")
				.expect(204, done);
		});
	});
	
	// TODO Finish test case
	describe("PATCH /users/:id", function () {
		it("should respond with a 200", function (done) {
			request(router)
				.patch("/users/:id")
				.expect(200, done);
		});
	});
	
	// TODO Finish test case
	describe("PUT /users/:id/favorites/:zip", function () {
		it("should respond with a 201", function (done) {
			request(router)
				.put("/users/:id/favorites/:zip")
				.expect(201, done);
		});
	});
	
	// TODO Finish test case
	describe("DELETE /users/:id/favorites/:zip", function () {
		it("should respond with a 204", function (done) {
			request(router)
				.delete("/users/:id/favorites/:zip")
				.expect(204, done);
		});
	});
	
	// TODO Finish test case
	describe("POST /sessions", function () {
		it("should respond with a 201", function (done) {
			request(router)
				.post("/sessions")
				.expect(201, done);
		});
	});
	
	// TODO Finish test case
	describe("DELETE /sessions/:jwt", function () {
		it("should respond with a 204", function (done) {
			request(router)
				.delete("/sessions/:jwt")
				.expect(204, done);
		});
	});
	
	// TODO Finish test function
});

describe("WWW host", function () {
	var router = express().use(www);
	
	describe("GET /", function () {
		it("should respond with a 200", function (done) {
			request(router)
				.get('/')
				.expect(200, done);
		});
	});
	
	describe("GET /explore", function () {
		it("should respond with a 200", function (done) {
			request(router)
				.get("/explore")
				.expect(200, done);
		});
	});
	
	// TODO Finish test function
});
