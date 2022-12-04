import React from "react";
import LibrarySong from "./LibrarySong";

const Library =({songs,setCurrentSong,audioRef,isPlaying})=>{
    return(
        <div className="Library">
            <h2>Library</h2>
            <div className="Library-songs">
                {songs.map((song)=>(
                    <LibrarySong setCurrentSong={setCurrentSong}
                     song={song} songs={songs}
                     id={song.id}
                     key={song.id}
                     audioRef={audioRef}
                     isPlaying={isPlaying}
                     />
                ))}

                
            </div>
            
        </div>
    )
}

export default Library