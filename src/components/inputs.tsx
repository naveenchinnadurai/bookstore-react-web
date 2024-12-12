interface props{
    setInputs:(e:any)=>void,
    placeHolder:string,
    value:string
}

function Inputs(props:props) {
    return (
        <input
            type="text"
            
            onChange={props.setInputs}
            value={props.value}
            placeholder={props.placeHolder}
            className="text-lg w-full md:w-1/3 py-2 px-4 text-black rounded-md outline-none bg-slate-200 focus:bg-white"
        />
    )
}

export default Inputs