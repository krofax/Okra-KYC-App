const axios = require('axios');
const qs = require('qs');

const secret_key = 'your secret key';
const bvnData = qs.stringify({
  "bvn": "your bvn",
});

const ninData = qs.stringify({
  "nin" : "your nin"
});


const bvnUrl = 'https://api.okra.ng/v2/products/kyc/bvn-verify';
const ninUrl = 'https://api.okra.ng/v2/products/kyc/nin-verify';

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
