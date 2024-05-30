
export interface prop {
    title: string | undefined,
    author: string[] | undefined,
    price: string | undefined,
    img: string | undefined,
    category: string[] | undefined
}
function BuyCard(props: prop) {
    return (
        <div className="bg-slate-900 grid sm:grid-cols-3 rounded-xl p-5 h-full">
            <div className="cols-span-2 md:cols-span-1 md:p-5">
                <img src={props.img} alt={props.title} className="w-full h-full" />
            </div>
            <div className="md:col-span-2 py-5 flex flex-col justify-between gap-3 md:gap-1">
                <h2 className="text-4xl font-bold md:w-3/4">{props.title}</h2>
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-normal">Author : {props.author}</h2>
                    <h2 className="text-xl font-normal">{props.category}</h2>
                </div>
                <h2 className="text-5xl font-medium">${props.price ? props.price : 205}</h2>
                <div className="flex gap-3 mt-2">
                    <span className=' w-fit h-fit px-5 py-1 rounded-lg flex items-center gap-3 cursor-pointer border '>
                        <span className='text-lg'>Add To Cart</span>
                    </span>
                    <span className=' w-fit h-fit px-5 py-1 rounded-lg flex items-center gap-3 cursor-pointer border '>
                        <span className='text-lg'>Know More</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BuyCard