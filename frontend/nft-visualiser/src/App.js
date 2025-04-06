import styled from 'styled-components';
import { NFTCard } from './components/NFTCard';

function App() {
  let nfts = [
	{name: "Mario", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Luigi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Mario", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Luigi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"}
  
  ]
  return (
    <div className="App">
		<Container>
			<Title>Super Mario World Collection</Title>
			<Subtitle>xxxxxx blah blah</Subtitle>
			<Grid>
			{
				nfts.map((nft, i) => 
					<NFTCard nft = {nft} key={i}/>
				)
			}
			</Grid>
		</Container>
		<NFTModal />
    </div>
  );
}

const NFTModal = (props) => {
	return (
		<Modal>
			<ModalContent>

			</ModalContent>
		</Modal>
	)
}

const Modal = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	z-index: 100% //stays on top of everything
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto; // enable scroll if needed
	background-color: rgba(0,0,0,0.5);
`

const ModalContent = styled.div`
	position: relative;
	width: 900px;
	margin: auto;
	background-color: white;
	border-radius: 20px;
	padding: 20px;
`

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
