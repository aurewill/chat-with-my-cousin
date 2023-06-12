import { CircularProgress, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const Message = ({ 
    messageInputRef, 
    userMessage, 
    setUserMessage, 
    chatOnEnter, 
    chat, 
    isLoading
}: any) => {
    return (
        <TextField
            id="message-field"
            label="Send a message."
            variant="outlined"
            fullWidth={true}
            autoComplete="off"
            ref={messageInputRef}
            value={userMessage}
            onChange={e => setUserMessage(e.target.value)}
            onKeyDown={chatOnEnter}
            InputProps={{endAdornment: 
                <IconButton
                    onClick={chat}
                >
                    {!isLoading && <SendIcon />}
                    {isLoading && <CircularProgress size={25}/>}
                </IconButton>
            }}
        />
    )
}
