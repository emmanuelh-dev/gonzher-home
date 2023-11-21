import Image from "next/image"

function OurMarkers(){
    return(
        <div className="container mx-auto px-4 py-6">
            <h2 className="font-bold text-4xl ">Know our gps markers</h2>
            <div>
                <div className="flex items-center">
                    <Image
                        width={30}
                        height={30}
                        src="/icons/default.png"
                        alt=""
                    />
                    Default Icon
                </div>
                <div className="flex items-center">
                    <Image
                        width={30}
                        height={30}
                        src="/icons/red.png"
                        alt=""
                    />
                    Default Icon
                </div>
                <div className="flex items-center">
                    <Image
                        width={30}
                        height={30}
                        src="/icons/yellow.png"
                        alt=""
                    />
                    Default Icon
                </div>
            </div>
        </div>
    )
}
export default OurMarkers