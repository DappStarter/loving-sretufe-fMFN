require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rifle sister purse install creek equal gas'; 
let testAccounts = [
"0x74f21ead493c3124a1709f078c0b26454990f5b32686ff9aac7eeda3a8e46969",
"0xfb0deb4d7d188dfa73049b0d63f9c9efedf0971c7b9fa2fd50dfc8487db4e424",
"0x9ff8cc018906952cedaa24b14a0b1a7986ab7114bf8ae94d160c57e3c99462c9",
"0x6ec024a786a51f139a1852171ddc1ca727262423725f882415b754d90bae01b0",
"0xb8e8fd087c7e7bed85014cd8bf806524eb63daa64c29e6187fa7479b7be8f6e0",
"0xdf5c8e4fa1533121b35bb5e986ac7728f8573e8ffb08912fa423e1e9ea7b7740",
"0xab15900519cba956677db84627f5e90e47be4a91ce319c2f58418fd874d0c69b",
"0xb4794b116acd0d62330c5c0b8be7da071c464609236383746d8e9951ed502ab2",
"0xbdb3e2ad9d2593af12cdbfd40112d254a0c39efa628696a5711c4e9b7e879231",
"0x693fd0ec21b3005b73b7fc36fd2d1b0ceb5abfa1ab06b3902b79834407cdeba5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


