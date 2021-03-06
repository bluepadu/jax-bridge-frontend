let due_timestamp;
let request_id;
let srcChain;
let destChain;
let active_token;

void async function main() {
    $("#link").html(location.href);
    
    parseQuery();
    setInterval(get_deposit_info, 1000);
}()

function parseQuery() {
    const query = location.search.substr(1);
    const paramList = query.split("&");
    const params = paramList.reduce((a, b) => Object.assign(a, {[b.split('=')[0]]: b.split('=')[1] }), {});
    if(Object.keys(params).includes("id")){
        request_id = params.id; 
        src_network = params.srcChain;
        active_token = params.token;

        $("#chainSelector").val(src_network);
        $("#request_id").html(request_id);
        get_deposit_info();
    }
    // else 
    //     goto404();
}


async function get_deposit_info() {
    if(!src_network) return;
    const src_web3 = new Web3(networks[src_network].url);
    let src_contract = new src_web3.eth.Contract(jaxBridgeEvmABI, contract_addresses[src_network][active_token + "_evm_bridge"]);
    try {
        let { amount, to, dest_chain_id, src_chain_data_hash } = await callSmartContract(src_contract, "requests", [request_id]);
        console.log(amount, to, dest_chain_id, src_chain_data_hash);

        let dest_network = chains[dest_chain_id];
        dest_web3 = new Web3(networks[dest_network].url);
        let dest_contract = new dest_web3.eth.Contract(jaxBridgeEvmABI, contract_addresses[dest_network][active_token + "_evm_bridge"]);
        let processed = await callSmartContract(dest_contract, "proccessed_deposit_hashes", [src_chain_data_hash]);
        let status = 0;
        let request;
        try{
            request = await callSmartContract(dest_contract, "foreign_requests", [src_chain_data_hash]);
            status = request.status;
        }
        catch(e) {

        }
        //{Init, Proved, Verified, Released, Completed}
        
        let text, color;
        switch(status) {
            case "0":
                text = "PENDING";
                color = "red";
                break;
            case "2":
                text = "VERIFIED";
                color = "blue";
                break;
            case "3":
                text = "EXECUTED";
                color = "purple";
                break;
            case "4":
                text = "COMPLETED";
                color = "green";
                $("#deposit_tx_link").html(make_a_tag(request.deposit_tx_link));
                $("#release_tx_link").html(make_a_tag(request.release_tx_link));
                $(".tx_hash").show();
                break;
            case "5":
                text = "REJECTED";
                color = "grey";
                break;
        }
        if(status != "4") {
            $(".tx_hash").hide();
        }
        $("#status").html(text)
        $("#status").css("color", color);
    }catch(e) {
        goto404();
    }

}

function make_a_tag(url) {
    return `<a href="${url}" target="_blank">${url}</a>`
}