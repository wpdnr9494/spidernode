'use strict';

const common = require('../common');
const assert = require('assert');
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const timer = setTimeout(function() {
  throw new Error('Timeout');
}, common.platformTimeout(200));

const messageSent = common.mustCall(function messageSent(err, bytes) {
  assert.equal(bytes, buf1.length + buf2.length);
  clearTimeout(timer);
});

const buf1 = Buffer.alloc(256, 'x');
const buf2 = Buffer.alloc(256, 'y');

client.on('listening', function() {
  client.send([buf1, buf2], common.PORT, common.localhostIPv4, messageSent);
});

client.on('message', common.mustCall(function onMessage(buf, info) {
  const expected = Buffer.concat([buf1, buf2]);
  assert.ok(buf.equals(expected), 'message was received correctly');
  client.close();
}));

client.bind(common.PORT);
