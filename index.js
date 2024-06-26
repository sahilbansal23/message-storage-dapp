const express = require('express');
const { ethers } = require('ethers');
require('dotenv').config();

const app = express();
app.use(express.json());

const provider = new ethers.providers.InfuraProvider('rinkeby', process.env.INFURA_PROJECT_ID);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractAbi = JSON.parse(process.env.CONTRACT_ABI);

const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

app.get('/api/message', async (req, res) => {
    try {
        const message = await contract.getMessage();
        res.json({ message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/message', async (req, res) => {
    try {
        const { message } = req.body;
        const tx = await contract.setMessage(message);
        await tx.wait();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
