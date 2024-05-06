
type props={
    title:string,
    data:string
}



function ConfirmElement({data,title}:props) {
    return ( 
    <div>
        <h1 className="font-medium whitespace-nowrap">
            {title}
        </h1>
        <h1 className="whitespace-nowrap">
            {data}
        </h1>
    </div>
     );
}

export default ConfirmElement;