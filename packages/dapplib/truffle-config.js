require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender skull street rival remember unable coral light army gate'; 
let testAccounts = [
"0x0b1e8bdf04cca00d14c7a71bb25155165bded170054377d67686ffd14919c5fe",
"0x33f1cbaf6bccc175ff24bc5abc4273f2d1f63a8e95cc56562bfed4e0dad8b736",
"0x409378c0d703440dbfcc0e6376ac58af755a760de632f1a37e98c9d8a76c9c61",
"0xccf967b36f6046c3ee616d2afc685d1452901d84d8b03ff55011cc82aae2ed1d",
"0xe8226bb2f4eda39355dc366b0a29bff40a78760908cc9b7082249766a6db9dc0",
"0x43b2a1ddfb7e96ca3c62be81c53f3e3d539659d3e4987454a0f14c19d3783f05",
"0x5814e55867805e229a11a8a65ee8597fd62ef1257b338f2a569d93839a5b0199",
"0x1810f1516c293e3c7a88e9c8946cab252accdda88981d10d1d2711a42a1a5df8",
"0xae51799e1233fad9688b7748fe9736b88043187f1a1f81dccedb544fb870a899",
"0xefbd878e3449eb07bce7d0d35476e3004ab74833e978cc36ebe0c5f4a35558ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
