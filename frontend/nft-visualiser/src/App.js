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
			<Title></Title>
			<Subtitle></Subtitle>
			<Grid>
			{
				nfts.map((nft, i) => 
					<NFTCard nft = {nft} key={i}/>
				)
			}
			</Grid>
		</Container>
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
	grid-template-columns: 1fr 1fr 1fr 1fr;
	row-gap: 40px;
`

export default App;
