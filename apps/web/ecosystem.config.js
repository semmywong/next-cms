module.exports = {
    apps: [
        {
            "name": "next",
            "script": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",
            "args": "run start",
            "exec_mode": "cluster",
            "instances": 2,
            "log_file": "./log/pm2.log",
            "log_date_format": "YYYY-MM-DD HH:mm:ss SSS",
            "merge_logs": true
        }
    ]
}