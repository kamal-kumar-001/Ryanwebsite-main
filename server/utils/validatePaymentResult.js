const crypto = require("crypto");

const validatePaymentResult = function (data) {
  const secretKey = process.env.PLISIO_SECRET_KEY;
  if (typeof data === "object" && data.verify_hash && secretKey) {
    const ordered = Object.assign({}, data);
    delete ordered.verify_hash;
    const string = JSON.stringify(ordered);
    const hmac = crypto.createHmac("sha1", secretKey);
    hmac.update(string);
    const hash = hmac.digest("hex");
    return hash === data.verify_hash;
  }
  return false;
};

module.exports = validatePaymentResult;
