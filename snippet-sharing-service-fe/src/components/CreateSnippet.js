import { postSnippet } from '../actions/actions.js'
import React, {useState} from 'react';
import { TextField, Button } from "@mui/material";


export function CreateSnippet() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [expiry, setExpiry] = useState(0)
    const [titleError, setTitleError] = useState(false)
    const [expiryError, setExpiryError] = useState(false)

 
    const handleSubmit = async (event) => {
        event.preventDefault()
 
        setTitleError(false)
        setExpiryError(false)
 
        if (title === '') {
            setTitleError(true)
        } 
        
        if (expiry === '') {
            setExpiryError(true)
        }

        if (title !== '' && expiry !== '') {
            await postSnippet(
                {
                    content: content,
                    title: title,
                    expiry: expiry
                })
        }
    }

    const numberInputKeyDown = (event) => {
        const eventCode = event.code.toLowerCase();
        if (!(event.code !== null
        && (eventCode.includes("digit")
            || eventCode.includes("arrow")
            || eventCode.includes("home")
            || eventCode.includes("end")
            || eventCode.includes("backspace") 
            || (eventCode.includes("numpad") && eventCode.length === 7)))
        ) {
        event.preventDefault();
        }
    };
     
    return (
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit} style={{padding: "2rem"}}>
            <h2>Create Snippet</h2>
                <TextField 
                    label="Title"
                    onChange={e => setTitle(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="title"
                    sx={{p: 3}}
                    fullWidth
                    value={title}
                    error={titleError}
                 />
                <TextField
                    id="filled-multiline-flexible"
                    label="Snippet Content"
                    multiline
                    rows={20}
                    sx={{p: 3}}
                    variant='filled'
                    fullWidth
                    onChange={e => setContent(e.target.value)}
                    value={content}
                />

                <TextField
                    id="myNumberInput"
                    label="Expiry (in minutes)"
                    type="text"
                    value={expiry} 
                    sx={{p: 3}}
                    onChange={e => setExpiry(e.target.value)}
                    error={expiryError}
                    onKeyDown={numberInputKeyDown}
                />

                
                <br/>
                <Button variant="outlined" sx={{m: 3}} color="secondary" type="submit">Submit</Button>
             
        </form>
        </React.Fragment>
    )
}
