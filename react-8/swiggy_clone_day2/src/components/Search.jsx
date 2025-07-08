
function Search({restArr, setAllRestaurants}) {
    function handleSearch(searchedText){
        // console.log(searchedText , "searchedText");
        let searchedRest = restArr.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()))
        setAllRestaurants(searchedRest)
    }
  return (
    <input onChange={(e)=>handleSearch(e.target.value)} className="border rounded ml-20 w-1/4 p-2" type="text" placeholder="Search Restaurant here..." />
  )
}

export default Search