import Error from "./Error";
export default function Form({Id,Type,ClassName,Placeholder,handleInput,message,selectedID,isError,value,IsError}) {
    
    return(
        <div className="form">
        <input className={(Id===selectedID && isError===true) ? ClassName + " input-error" : ClassName} type={Type} id={Id} placeholder={Placeholder} onChange={handleInput} value={(Id===selectedID) ? value : undefined}/>
        {((Id===selectedID && isError===true) || (IsError===true && Id===selectedID)) ? <Error message={message}/> : null}
        </div>
    );
    
}