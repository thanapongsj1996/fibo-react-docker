const keys = require('./keys')
const redis = require('redis')

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000 // ต่อใหม่ภายใน 1 วินาที
})
const sub = redisClient.duplicate()  // sub => subscription

function fib(index) {
    if (index < 2) return 1
    return fib(index - 1) + fib(index - 2)
}

sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)))  // hashed set
})

sub.subscribe('insert')