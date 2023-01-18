const { Server } = require("v2ray-core");
const { execSync } = require("child_process");

// Configure V2Ray
const config = {
    inbound: {
        port: 10000
    },
    outbound: {
        protocol: "vmess",
        settings: {
            vnext: [{
                address: process.env.V2RAY_DOMAIN,
                port: 80,
                users: [{
                    id: "user-id",
                    alterId: 64
                }]
            }]
        }
    }
};

const server = new Server(config);
server.run();

// Deploy to Cyclic
execSync("cyclic-cli deploy --name v2ray --image v2ray/official --port 10000");
