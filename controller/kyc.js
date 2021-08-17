const axios = require('axios');
const qs = require('qs');

const secret_key = 'YOUR SECRET KEY';
//stringify bvn data 
const bvnData = qs.stringify({
  "bvn": "Your BVN DATA",
});

const bvnUrl = 'https://api.okra.ng/v2/products/kyc/bvn-verify';

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