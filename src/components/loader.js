import '../style/components/loader.scss';


function Loader (){
    console.log('Loading...')
    return (
        <div className="loaderContainer">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
       
    )
}

export default Loader;