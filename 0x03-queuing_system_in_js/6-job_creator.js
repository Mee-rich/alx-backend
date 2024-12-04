#!/usr/bin/yarn dev
import { createQueue } from 'kue';

const job_data = {
	phoneNumber: '07042289653',
	message: 'Account Created',
}

const queue = createQueue({name: 'push_notification_code'});

const job = queue.create('push_notification_code', job_data);

job
	.on('enqueue', () => console.log('Notification job created:', job.id))
	.on('complete', () => console.log('Notification job completed'))
	.on('failed attempt', () => console.log('Notification job failed'));

job.save();
