import Layout from "../components/Layout"


const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLBV82dMBrka_ukHUT-Z_KZtAL4jiuURfW&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const Index=({ data })=>(
    <Layout>  
    <ul className="grid grid-cols-3 gap-4">
        {data.items.map((item)=>{
            
            const {id,snippet={}}=item;
            const {title,thumbnails={},resourceId}=snippet;
            const {medium={}}=thumbnails;
            return(
                <li key={id}>
                      <style jsx>{`
        li {
          list-style: none;
        }
        
      `}</style>
                    <a  target="_blank" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                    <img
                     src={medium.url}
                      alt="Picture of the author"
                      width={medium.width}
                    height={medium.height}
                    />
                    <p>{title}</p>
                    </a>
                </li>
            )
        })}
        
    </ul>
    </Layout>
);
export default Index;