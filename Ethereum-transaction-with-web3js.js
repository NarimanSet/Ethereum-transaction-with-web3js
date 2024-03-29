const {Web3} = require('web3');

const web3 = new Web3('https://polygon-mumbai-bor-rpc.publicnode.com');

const privateKey = 'my private key';
const myAddress = '0x6DA8f8458E55C6B1bAeCe40105404Eb9f82c1e10';
const destinationAddress = '0xC9d59a78FE51D0A084B9C1F3Ca29Ec0Afa2fadc6';

async function sendTransactionWithData(){
    const transaction = {
        from: myAddress,
        to: destinationAddress,
        value: web3.utils.toWei('0.01','ether'),
        data: web3.utils.asciiToHex('Nariman Setmanbetov'),
        gas:30000,
        gasPrice: await web3.eth.getGasPrice()
    };

    web3.eth.accounts.signTransaction(transaction, privateKey).then(signedTx => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', console.log);
    });
}
sendTransactionWithData();
