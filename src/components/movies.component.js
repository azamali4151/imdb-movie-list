import React, { useState } from "react";
import Table from '../common/table.component';
import Rating from "./rating.component";
const Movies = (props) =>{
    const [movies, setMovies] = useState([
            {rank:1,title:'sultan',imbd_rating:9,your_rating:true},
            {rank:2,title:'Tere Name',imbd_rating:9,your_rating:false},
            {rank:3,title:'boss',imbd_rating:9,your_rating:true},
            {rank:4,title:'body gurd',imbd_rating:9,your_rating:false},
            {rank:5,title:'jay ho',imbd_rating:9,your_rating:true},
    ])
    
    const columns =[
        {label:"Rank",path:'rank', content: movies=><td>{movies.rank}</td> },
        {label:"Title",path:'title', content: movies=><td>{movies.title}</td> },
        {label:"IMBD Rating",path:'imbd_rating', content: movies=><td>{movies.imbd_rating}</td> },
        {label:"Your Rating",path:'your_rating', content: movies=><td><Rating isRated={movies.your_rating} rank={movies.rank} handleToggleRating={handleToggleRating}/></td> },
        {label:"Action",path:'action', content: movies=><td></td> },
    ]

    const handleToggleRating = (movieRank) => {
        
        //const movies = [...movies];
        const movie = movies.find((movie) => movie.rank === movieRank);
        
        movie.your_rating = !movie.your_rating;
        setMovies([ ...movies, movies ]);
      };
    return(
            <>
               <Table headers= {columns} items={movies} columns ={columns}/>
            </>
    )
    
}

export default Movies;