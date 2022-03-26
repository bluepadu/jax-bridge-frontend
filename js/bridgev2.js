let contract_addresses = {
    jaxBridge: '0x86fCf637AfdF4B62e0FF3d8D275BB0C70213D675',
    wjxn: '0xa25946ec9d37dd826bbe0cbdbb2d79e69834e41e'
}

let jaxBridgeABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"}],"name":"Approve_Request","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"from","type":"string"}],"name":"Create_Request","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"}],"name":"Reject_Request","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"request_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Release","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"request_id","type":"uint256"}],"name":"approve_request","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"from","type":"string"}],"name":"create_request","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposit_addresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"request_id","type":"uint256"}],"name":"reject_request","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"request_id","type":"uint256"},{"internalType":"string","name":"txHash","type":"string"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deposit_address_id","type":"uint256"},{"internalType":"uint256","name":"valid_until","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"enum JaxBridgeV2.RequestStatus","name":"status","type":"uint8"},{"internalType":"string","name":"from","type":"string"},{"internalType":"string","name":"txHash","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_requests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawByAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wjxn","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
let erc20ABI = [{ "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tx_fee", "type": "uint256" }], "name": "setTransactionFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_wallet", "type": "address" }], "name": "setTransactionFeeWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transaction_fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transaction_fee_decimal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tx_fee_wallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const maxUint = "0x" + "f".repeat(64);

void async function main() {
    $("#amountIn").on('input', update_state)
    $("#network1").on('change', update_state)
    $("#network2").on('change', update_state)
    update_state();
    setInterval(check_status, 3000);
    check_status();
}()

async function deposit() {
    let network1 = $("#network1").val();
    let network2 = $("#network2").val();
    if(accounts.length == 0){
        connect_wallet();
    }
    const amountIn = $("#amountIn").val();
    const from = $("#from").val();
    const to = $("#to").val();
    let destChainId;
    if(network2 == "bsc" || network2 == "ethereum") {
        destChainId = networks[network2].chainId;
    }
    else destChainId = 0;
    const func = 'create_request';
    // address to, uint destChainId, uint amount, uint nonce, bytes calldata signature
    let contract = new web3.eth.Contract(jaxBridgeABI, contract_addresses.jaxBridge);
    const nonce = await callSmartContract(contract, "nonces", [accounts[0]]);

    const args = [amountIn, to, from];
    const {success, gas, message} = await estimateGas(contract, func, args);
    if(!success) {
        notifier.warning(message);
        return;
    }
    await notifier.async(runSmartContract(contract, func, args)
        , null, null, `Create request`,
        {labels: {async: "Please wait..."}});
    
}

async function approve() {
    let contract = new web3.eth.Contract(erc20ABI, contract_addresses.wjxn);
    if((await check_allowance()) != true)
        approve_token("WJXN", contract, contract_addresses.jaxBridge, maxUint);
}

async function check_allowance() {
    let contract = new web3.eth.Contract(erc20ABI, contract_addresses.wjxn);
    let allowance = await callSmartContract(contract, "allowance", [accounts[0], contract_addresses.jaxBridge]);
    return allowance >= 500;
}

async function check_status() {
    let network1 = $("#network1").val();
    if(network1 == "jax") {
        $("#btn_deposit").attr("disabled", false);
        $("#btn_approve").hide();
        return;
    }
    if(await check_allowance()) {
        $("#btn_approve").hide();
        $("#btn_deposit").attr("disabled", false);
    }
    else {
        $("#btn_approve").show();
        $("#btn_deposit").attr("disabled", true);
    }
}

async function update_state() {
    let network1 = $("#network1").val();
    let network2 = $("#network2").val();
    let activeChain = $("#chainSelector").val();
    if(network1 == network2) {
        let currentIndex = $("#network2")[0].selectedIndex;
        $("#network2")[0].selectedIndex = (currentIndex + 1) % 3;
    }
    if(network1 != "jax" && network1 != activeChain) {
        $("#chainSelector").val(network1);
        $("#chainSelector").trigger("change");
    }
    network2 = $("#network2").val();
    let amountIn = $("#amountIn").val();
    let amountOut;
    if(network1 == "ethereum") {
        if(network2 == "bsc")
            amountOut = amountIn;
        else
            amountOut = amountIn - 50;
    }
    if(network1 == "bsc") {
        if(network1 == "ethereum")
            amountOut = amountIn;
        else
            amountOut = amountIn - 50;
    }
    if(network1 == "jax") {
        amountOut = amountIn - 50;
    }
    if(amountOut < 0) amountOut = 0;
    $("#amountOut").val(amountOut);
}

function accountChanged() {
    let account = accounts[0];
    $("#to").val(account);
    check_status();
}