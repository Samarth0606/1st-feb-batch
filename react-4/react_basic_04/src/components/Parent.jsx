import Champaran from "./Champaran";

function Parent(){
    function samarth(data){
        console.log(data);   
    }
    return(
        <div>
            <Champaran fn={samarth} />
        </div>
    )

}

export default Parent;