#!/usr/bin/yarn dev
/*
 * Create the job processor
 */
import { createQueue } from 'kue';

const queue = createQueue();

/*
 * sendNotification: The task to be performed
 */
const sendNotification = (phoneNumber, message) => {
	console.log(
		`Sending notification to ${phoneNumber},`, 'with message:', message)
};

queue.process('push_notification_code', (job, done) => {
	sendNotification(job.data.phoneNumber, job.data.message);
	done();
});
