import { CircularProgress, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const Message = ({ 
    messageInputRef, 
    userMessage, 
    setUserMessage, 
    chatOnEnter, 
    chat, 
    isLoading,
    sendMessageEnabled,
    setSendMessageEnabled,
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
            onChange={e => {
                setUserMessage(e.target.value);
                if (e.target.value) {
                    setSendMessageEnabled(true);
                } else {
                    setSendMessageEnabled(false);
                }
            }}
            onKeyDown={e => {
                if (sendMessageEnabled) {
                    chatOnEnter(e);
                }
            }}
            InputProps={{endAdornment: 
                <IconButton
                    onClick={e => {
                        if (sendMessageEnabled) {
                            chat();
                        }
                    }}
                >
                    {!isLoading && 
                        <SendIcon
                            color={sendMessageEnabled ? "primary" : "disabled"}
                        />
                    }
                    {isLoading && <CircularProgress size={25}/>}
                </IconButton>
            }}
        />
    )
}
