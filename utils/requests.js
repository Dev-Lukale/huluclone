const API_KEY = process.env.API_KEY;
export const trending = {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
};
export const moviesreq = {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/movie/week?api_key=${API_KEY}&language=en-US`
    },

    fetchTopRated: {
        title: "Top Rated",
        url: `/discover/movie/?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
    },
    

};
export const seriesreq = {
    fetchTV: {
        title: "TV Movie",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&include_null_first_air_dates=false&with_status=0&with_type=0`, 
        // url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&include_null_first_air_dates=false&with_status=0&with_type=0`, 
    },
    fetchTrending: {
        title: 'Trending',
        url: `/trending/tv/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRatedSeries: {
        title: "Top Rated",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,  
    },
    fetchActionSeries: {
        title: "Action",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&with_genres=28&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
        
    },
    fetchComedySeries: {
        title: "Comedy",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&with_genres=35&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    },
    fetchHorrorSeries: {
        title: "Horror",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&with_genres=27&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
        
    },
    fetchRomanceSeries: {
        title: "Romance",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&with_genres=10749&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    },
    fetchMysterySeries: {
        title: "Mystery",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&with_genres=9648&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    },
    fetchSciFiSeries: {
        title: "Sci-Fi",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&with_genres=37&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    },
    fetchAnimationSeries: {
        title: "Animation",
        url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&with_genres=16&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
    },
}