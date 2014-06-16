
// core
module.exports.PublicKeyRing = require('./core/PublicKeyRing');
module.exports.TxProposals = require('./core/TxProposals');
module.exports.PrivateKey = require('./core/PrivateKey');
module.exports.Passphrase = require('./core/Passphrase');
module.exports.Structure = require('./core/Structure');
module.exports.AddressIndex = require('./core/AddressIndex');


// components
var WebRTC = module.exports.WebRTC = require('./network/WebRTC');
var Insight = module.exports.Insight = require('./blockchain/Insight');
var StorageLocalPlain = module.exports.StorageLocalPlain = require('./storage/LocalPlain');
var StorageLocalEncrypted = module.exports.StorageLocalEncrypted = require('./storage/LocalEncrypted');

var WalletFactory = require('soop').load('./core/WalletFactory',{
  Network: WebRTC,
  Blockchain: Insight,
  Storage: StorageLocalEncrypted,
});
module.exports.WalletFactory = WalletFactory;
module.exports.version = require('./version');
module.exports.API = require('./API');
