#!/usr/bin/yarn dev
/*
 * Node Redis client publisher
 */
import { createClient } from 'redis';

//create Redis client
const client = createClient();

client.on('connect', () => console.log('Redis client connected to the server'));

client.on('error', (err) => console.log('Redis client not connected to the server:', err.toString()));

/*
 * Publishs a message to the 'holberton school channel' after a delay
 * @param {string} message - The message to publish
 * @param {integer} time - The delay in miliseconds before publishing.
 */
const publishMessage = (message, time) => {
	setTimeout(() => {
		console.log(`About to send ${message}`);
		client.publish('holberton school channel', message);
	}, time);
};

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton student #3 starts course", 400);

