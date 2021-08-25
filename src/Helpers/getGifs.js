

export const getGifs = async ( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=6blAOp4yE8CDe8jjHI28mS1UkiKjDdGZ`
        const respuesta = await fetch( url );
        const {data} = await respuesta.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    
        return gifs;
    }