const axios = require('axios');
const qs = require('qs');

 const secret_key = 'your secret key';
//stringify bvn data 
const bvnData = qs.stringify({
  "bvn": "your bvn",
});

//stringify nin data
const ninData = qs.stringify({
  "nin" : "your nin"
});

//stringify rctin data
const rcData = qs.stringify({
  "rc_number" : "rc number",
  "company_name" : "your comapny name",
  "tin_number" : "tin number"
});

const bvnUrl = 'https://api.okra.ng/v2/products/kyc/bvn-verify';
const ninUrl = 'https://api.okra.ng/v2/products/kyc/nin-verify';
const rcUrl = 'https://api.okra.ng/v2/products/kyc/rc-tin-verify';

//retreive BVN details
exports.bvnCheck = async (req, res) => {
	try {
		const response = await axios({
			url: bvnUrl,
			method: "post",
      headers: { 
        'Authorization': `Bearer ${secret_key}`, 
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
      data : bvnData
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
}

//retreive NIN details
exports.ninCheck = async (req, res) => {
	try {
		const response = await axios({
			url: ninUrl,
			method: "post",
      headers: { 
        'Authorization': `Bearer ${secret_key}`,
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
      data : ninData
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
}

//retreive RCTIN details
exports.rcTinCheck = async (req, res) => {
	try {
		const response = await axios({
			url: rcUrl,
			method: "post",
      headers: { 
        'Authorization': `Bearer ${secret_key}`, 
		'Content-Type': 'application/x-www-form-urlencoded', 
      },
      data : rcData
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
}