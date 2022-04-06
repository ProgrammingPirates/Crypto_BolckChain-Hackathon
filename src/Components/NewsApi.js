import React,{useEffect,useState} from 'react'

function NewsApi() {
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        const getArticles = async() => {
          
            const res = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/in.json')

            const data = await res.json();
            console.log("news",data)
            return data
        }
        getArticles().then(data => setArticles(data))
        .catch(err => console.log(err));
    },[])
    return (
        <>  
            {(articles.articles !== undefined) ? articles.articles.map((elem) => {
                return(
                    <div className = "bg-transparent">
                        <h1 className="mt-5 text-xl text-yellow-300 ">
                            <a href={elem.url} target = "_blank">{elem.source.name}</a>
                        </h1>
                        <p className="text-xl hover:text-yellow-300">
                            <a href={elem.url} target = "_blank" >{elem.title}</a>
                        </p>
                    </div>
                )
            }): console.log("error while fetching data")}
        </>
    )
}

export default NewsApi
