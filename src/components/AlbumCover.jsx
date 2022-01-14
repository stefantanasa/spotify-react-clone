const AlbumCover = (props) => {
    return ( 
        <div>
            <img className='album-cover m-2' src={props.image} alt="" srcset="" />
            <p>{props.artistName}</p>
        </div>
     );
}
 
export default AlbumCover;