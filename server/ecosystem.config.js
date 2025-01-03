module.exports = {
    apps: [
        {
            name: "collabova",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            },
        },
    ],
};