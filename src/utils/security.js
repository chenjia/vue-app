require('../../static/lib/security/tripledes')
require('../../static/lib/security/mode-ecb-min')

const encryptByDES = (message, key) => {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64).replace(/[\r\n]/g, '');
}

const decryptByDES = (ciphertext, key) => {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext.replace(/[\r\n]/g, ''))
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

const encryptKey = key => {
  let array = key.split('')
  let letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let encryptedKey = ''
  for(let i=0;i<array.length;i++){
    encryptedKey += array[i]
    for(let j=0;j<i%2+1;j++){
      encryptedKey += letters.substr(parseInt(Math.random()*letters.length),1)
    }
  }
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encryptedKey.split('').reverse().join('')))
}

const decryptKey = encryptedKey => {
  encryptedKey = CryptoJS.enc.Base64.parse(encryptedKey).toString(CryptoJS.enc.Utf8).split('').reverse().join('')
  let str = ''
  for(let i=0,j=0;i<encryptedKey.length;i++){
    str += encryptedKey[i]
    i += (j++ % 2 + 1)
  }
  return str
}

export {encryptByDES,decryptByDES,encryptKey,decryptKey}