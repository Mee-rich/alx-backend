#!/usr/bin/yarn dev

import { createClient, print } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis client not connected to the server', err.toString()));

const setNewSchool = (schoolName,value) => client.SET(schoolName, value, print);

const displaySchoolValue = (schoolName) => {
	client.GET(schoolName, (_err, reply) => {
		console.log(reply);
	})
};

async function main() {
	await displaySchoolValue('Holberton');
	setNewSchool('HolbertonSanFranscisco', '100');
	await displaySchoolValue('HolbertonSanFrancisco');
};

client.on('connect', async () => {
  console.log('Redis client connected to the server');
  await main();
});
