const { execSync } = require("child_process");

// Update package list
execSync("apt-get update");

// Download and install V2Ray
execSync("curl https://install.direct/go.sh | sudo bash");

// Start V2Ray service
execSync("systemctl start v2ray");
console.log("V2Ray server started!");
