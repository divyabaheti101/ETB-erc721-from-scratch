import styled from 'styled-components';
import { NFTCard, NftPhoto } from './components/NFTCard';
import { useEffect, useState } from 'react';
import { NFTModal } from './components/NFTModal';
import { ethers } from 'ethers';
import { connect } from './helpers';
import axios from 'axios';

function App() {

	let initialNfts = [
		{name: "Mario", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
		{name: "Luigi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
		{name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
		{name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
		{name: "Mario", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
		{name: "Luigi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
		{name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
		{name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"}
	]

	const [showModal, setShowModal] = useState(false)
	const [selectedNft, setSelectedNft] = useState()
	const [nfts, setNfts] = useState(initialNfts)

	useEffect(() => {
		( async () => {
			const address = await connect()
			if (address){
				getNfts(address)
			}
		})()
	}, [])

  function toggleModal(i) {
	if (i >= 0) {
		setSelectedNft(nfts[i])
	}
	setShowModal(!showModal)
  }

  async function getNfts(address) {
	const rpc = "https://rpc-amoy.polygon.technology" // alchemy so that we don't have the downtime
	const ethersProvider = new ethers.JsonRpcProvider(rpc)

	let abi = [
		"function symbol() public view returns(string memory)",
		"function tokenCount() public view returns(uint256)",
		"function uri(uint256 _tokenId) public view returns(string memory)",
		"function balanceOfBatch(address[] accounts, uint256[] ids) public view returns(uint256[])"
	]

	let nftCollection = new ethers.Contract(
		"0xa8c4f6B9eCC1978d4049d95877CeAfA2419d1762",
		abi,
		ethersProvider
	)
	

	let numberOfNfts = Number(await nftCollection.tokenCount())
	let collectionSymbol = await nftCollection.symbol()
	

	let accounts = Array(numberOfNfts).fill(address)
	let ids = Array.from({length: numberOfNfts}, (_, i) => i+1)
	let copies = await nftCollection.balanceOfBatch(accounts, ids)

	let tempArray = []
	let baseUrl = ""

	for (let i=1; i<=numberOfNfts; i++){
		if (i == 1) {
			let tokenURI = await nftCollection.uri(i)
			baseUrl = tokenURI.replace(/'\d+.json/, "")
			let metadata = await getMetadatFromIpfs(baseUrl + `${i}.json`)
			metadata.symbol = collectionSymbol
			metadata.copies = copies[i]
			tempArray.push(metadata)
		} else {
			let metadata = await getMetadatFromIpfs(baseUrl + `${i}.json`)
			metadata.symbol = collectionSymbol
			metadata.copies = copies[i-1]
			tempArray.push(metadata)
		}
	}
	setNfts(tempArray)
  }

  	async function getMetadatFromIpfs(tokenURI) {
		tokenURI = tokenURI.replace(/'/g, ""); // my base uri while creating contract has got ' at start and end so removing it
		let metadata = await axios.get(tokenURI)
		return metadata.data;
	}

  return (
    <div className="App">
		<Container>
			<Title>Super Mario World Collection</Title>
			<Subtitle>xxxxxx blah blah</Subtitle>
			<Grid>
			{
				nfts.map((nft, i) => 
					<NFTCard nft={nft} key={i} toggleModal={ () => toggleModal(i) }/>
				)
			}
			</Grid>
		</Container>
		{
			showModal &&
			<NFTModal nft={selectedNft} 
			toggleModal = {() => toggleModal()}/>
		}
    </div>
  );
}

const Title = styled.h1`
	margin: 0;
	text-align: center;
`

const Subtitle = styled.h4`
	color: gray;
	margin-top: 0;
	text-align: center;
`

const Container = styled.div`
	width: 70%;
	max-width: 1200px;
	margin: auto;
	margin-top: 100px;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr; //fr - fraciton so this will do 4 parts
	row-gap: 40px;

	@media(max-width: 1200px){
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media(max-width: 900){
		grid-template-columns: 1fr 1fr;
	}

	@media(max-width: 600px){
		grid-template-columns: 1fr;
	}
`

export default App;
