import SpinnerSVG from "../assets/videos/spinner/Infinity@1x-1.6s-242px-242px.svg"

const Spinner =()=>{

    return(
        <div
            style={{
                width:"100%",
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
        >

            <img
                src={SpinnerSVG}
                alt="Loading..."
                style={{
                    width:"120px",
                    height:"120px"
                }}
            />

        </div>
    )
}

export default Spinner;