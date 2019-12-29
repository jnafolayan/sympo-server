module.exports = {
  apps : [{
    name: 'sympo',
    script: './build/bin/www.js',
    instances: 'max',
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};