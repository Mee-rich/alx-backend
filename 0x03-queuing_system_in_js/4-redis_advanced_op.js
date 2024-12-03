#!/usr/bin/yarn dev
/*
 * Node redis client and advanced operations
 * Settig multiple values using hset
 */
import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis client not connected to the server', err.toString()));

client.on('connect', () => console.log('Redis client connected to the server'));

//hashName is the key
const updateHash = (hashName, fieldName, fieldValue) => {
	client.HSET(hashName, fieldName, fieldValue, print);
};

const printHash = (hashName) => {
	client.HGETALL(hashName, (_err, reply) => console.log(reply));
};

const storeHash = () => {
	const hashObj = {
	Portland: 50,
	Seattle: 80,
	'New York': 20,
	Bogota: 20,
	Cali: '40',
	Paris: '2'
	};
	for (const [field, value] of Object.entries(hashObj)) {
		updateHash('HolbertonSchools', field, value);
	};
	printHash('HolbertonSchools');
};

storeHash()
