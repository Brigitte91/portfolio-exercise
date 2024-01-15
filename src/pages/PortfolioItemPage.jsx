export const PortfolioItemPage = ({item}) =>{
    return(
        <div>

        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <img src={item.imageUrl}></img>
        </div>
    )
}