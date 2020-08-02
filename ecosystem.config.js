module.exports = {
  apps: [
    {
      name: "max_mem",
      script: "./app/index.js",
      exec_interpreter: "node",
      exec_mode: "cluster_mode",
      instances: "max",
      max_memory_restart: "50M",
      exp_backoff_restart_delay: 100,
      restart_delay: 3000,
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "player",
      script: "./app/music/play.js"
    },
    {
      name: "dc",
      script: "./app/music/leave.js"
    },
    {
      name: "res",
      script: "./app/owner/restart.js"
    }
  ]
};
