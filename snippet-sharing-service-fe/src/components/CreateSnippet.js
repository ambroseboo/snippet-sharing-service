import { postSnippet } from '../actions/actions.js'
import React, {useState, useEffect} from 'react';
import { TextField, FormControl, Button } from "@mui/material";

export function CreateSnippet() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [titleError, setTitleError] = useState(false)
 
    const handleSubmit = async (event) => {
        event.preventDefault()
 
        setTitleError(false)
 
        if (title == '') {
            setTitleError(true)
        } else {
            await postSnippet(
                {
                    content: content,
                    title: title,
                    added_date: new Date(),
                    expiry_date: new Date(new Date().getTime() + 10*60000)
                })
        }
    }
     
    return (
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
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

                <TextField type="date" sx={{p: 3}}></TextField>
                <br/>
                <Button variant="outlined" sx={{m: 3}} color="secondary" type="submit">Submit</Button>
             
        </form>
        </React.Fragment>
    )
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Multiline"
//           multiline
//           maxRows={4}
//         />
//       </div>
      
//       <div>
//         <TextField
//           id="standard-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
}