import { useState } from "react"

export function CreateToDo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return <div>
        <input type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;
            setTitle(e.target.value)
        }}></input> <br></br>
        <input type="text" placeholder="description"  onChange={function (e) {
            const value = e.target.value;
            setDescription(e.target.value)
        }}></input> <br></br>

        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body:JSON.stringify({
                    title : title,
                    description : description
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then(
                async (res) => {
                    const json = await res.json()
                    alert("Todo Added")
                }
            )
        }}>Add a ToDo</button>
    </div>
}