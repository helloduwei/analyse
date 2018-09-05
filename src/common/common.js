// 公共方法库
const md5 = require('md5')
export default {
  create32 () {
    let nonce = '';
    const str = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0, len = 32; i < len; i++) {
        nonce += str[Math.ceil(Math.random() * str.length)];
    }

    return nonce;
  },
  generateSign(arr) {
    let sign = '';
    arr = arr.sort();
    for (let o in arr) {
        sign += `${arr[o]}&`;
    }

    return md5(sign.replace(/&$/g, '') + 'OwMMI8YXkgU36ODGC6j2jsbz6mtY90Fh');
  },
  getCookie(key) {
    var reg = new RegExp(key + '=' + '([^;]*)' + ';'); 
    var result = reg.exec(document.cookie); 
    return ( result && result[1]) || false; 
  },
  setCookie (key, val, expir) {
    const exdate = new Date()
    exdate.setDate(exdate.getDate() + expir)
    document.cookie= key+ "=" + escape(val) + ((expir==null) ? "" : ";expires=" + exdate.toGMTString())
  },
  getUid() {
    const key = 'SMGDATATOKEN';
    const value = this.getCookie(key);
    if (value) {
      return value.split(',')[1] || value.split('25%')[1];
    }

    return 0
  },
  getToken() {
    const key = 'SMGDATATOKEN';
    const value = this.getCookie(key);
    if (value) {
      return value.split(',')[0] || value.split('25%')[0];
    }

    return ''
  },
  userInfo(path) {
    const time = +new Date();
    const nonce = this.create32();
    const r = path;
    // const uid = this.getUid();
    const uid = 66;
    const token = '03f68f835ba026f85ef274d0648424c5'
    // const token = this.getToken();
    const querys = ['jsonrpc=2.0', `timetamp=${time}`, `nonce=${nonce}`, `r=${r}`, `uid=${uid}`, `token=${token}`];
    const sign = this.generateSign(querys);

    return {
      jsonrpc: '2.0',
      timetamp: time,
      nonce: nonce,
      uid: uid,
      token: token,
      sign: sign
    }
  },
  myFetch(p, r, o={}) {
    const formData = new FormData();
    const userInfo = this.userInfo(r);
    formData.append('jsonrpc', userInfo.jsonrpc)
    formData.append('timetamp', userInfo.timetamp)
    formData.append('nonce', userInfo.nonce)
    formData.append('uid', userInfo.uid)
    formData.append('token', userInfo.token)
    formData.append('sign', userInfo.sign)
    for (let k in o) {
      formData.append(k, o[k])
    }
    return fetch(p, {
      method: 'post',
      body: formData
    }).then((res) => {
      return res.json()
    }).then((data) => {
      const result = data.result
      if (result && result.code - 0 === 100) {
        return result.data
      }

      return false
    })
  }
}