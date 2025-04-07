import styled from 'styled-components';
import { NFTCard, NftPhoto } from './components/NFTCard';
import { useState } from 'react';
import { NFTModal } from './components/NFTModal';
import { ethers } from 'ethers';

function App() {

	const [showModal, setShowModal] = useState(false)
	const [selectedNft, setSelectedNft] = useState()
	const [nfts, setNfts] = useState(initialNfts)

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

  function toggleModal(i) {
	if (i >= 0) {
		setSelectedNft(nfts[i])
	}
	setShowModal(!showModal)
  }

  async function getNfts(address) {
	const rpc = "https://rpc-amoy.polygon.technology"
	const ethersProvider = new ethers.JsonRpcProvider(rpc)

	let abi = [
		"function symbol() public view returns(string memory)",
		"function tokenCount() public view returns(uint256)",
		"function uri(uint256 _tokenId) public view returns(string memory)",
		"funciton balanceOfBatch(address[] accounts, uint256[] ids) public view returns(uint256[] memory) "
	]

	let nftCollection = new ethers.Contract(
		"0xa8c4f6B9eCC1978d4049d95877CeAfA2419d1762",
		abi,
		ethersProvider
	)
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
`

export default App;
