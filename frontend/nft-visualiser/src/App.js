import styled from 'styled-components';
import { NFTCard } from './components/NFTCard';

function App() {
  let nfts = [
	{name: "Mario", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Luigi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Yoshi", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"},
	{name: "Donkey Kong", symbol: "SMWC", copies: 10, image: "https://ipfs.io/ipfs/bafybeiavwldch7gi535jr7hkmyz4v3afmsgemy3yokf4eq55hdbjwgqyxu"}
  ]
  return (
    <div className="App">
		{
			nfts.map((nft, i) => 
				<NFTCard nft = {nft} key={i}/>
			)
		}
    </div>
  );
}

export default App;
