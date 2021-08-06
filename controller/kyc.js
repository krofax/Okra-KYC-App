const axios = require('axios');
const qs = require('qs');

//stringify bvn data 
const bvnData = qs.stringify({
  "bvn": "22193780752",
});

//stringify nin data
const ninData = qs.stringify({
  "nin" : "28534356169"
});

//stringify rctin data
const rcData = qs.stringify({
  "rc_number" : "1757407",
  "company_name" : "TRANSFA TECHNOLOGIES LTD",
  "tin_number" : "23820683-0001"
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE2MzU4MTMwYTk0MzQ4NmYzM2RjZWQiLCJpYXQiOjE2MjYyNjE1MjF9.Qf0J6Bz7M8aWJ_YDjK_56q8awfNuCwc7oAA-MIRB8l4', 
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE2MzU4MTMwYTk0MzQ4NmYzM2RjZWQiLCJpYXQiOjE2MjYyNjE1MjF9.Qf0J6Bz7M8aWJ_YDjK_56q8awfNuCwc7oAA-MIRB8l4', 
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE2MzU4MTMwYTk0MzQ4NmYzM2RjZWQiLCJpYXQiOjE2MjYyNjE1MjF9.Qf0J6Bz7M8aWJ_YDjK_56q8awfNuCwc7oAA-MIRB8l4', 
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
      data : rcData
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
}