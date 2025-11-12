const TonWeb = require('tonweb');
const { mnemonicToWalletKey } = require('@ton/crypto');

const seedPhrase = [
  'change', 'scatter', 'belt', 'garden', 'ignore', 'moral',
  'fashion', 'gift', 'frog', 'tell', 'museum', 'own'
];

const tonweb = new TonWeb(new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC'));

async function main() {
  try {
    const keyPair = await mnemonicToWalletKey(seedPhrase);

    console.log('Private Key:', Buffer.from(keyPair.secretKey).toString('hex'));
    console.log('Public Key :', Buffer.from(keyPair.publicKey).toString('hex'));

    const wallet = tonweb.wallet.create({ publicKey: keyPair.publicKey });
    const address = await wallet.getAddress();

    console.log('Wallet address:', address.toString(true, true, true));
  } catch (err) {
    console.error('Error:', err);
  }
}

main();


///prints
//Private Key:
//Public Key:
//Wallet address:
