import { 
    Alert,
    Paper, 
    Snackbar, 
    Stack, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow, 
    Typography 
} from "@mui/material";
import { Fragment, useRef, useState } from "react";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PersonIcon from '@mui/icons-material/Person';
import { Message } from "./Message";
import { fetchWithTimeout } from "./utils";

export const Chat = () => {

    interface cachedMessage {
        user: string,
        assistant: string,
    }

    const maxCachedMessages = 15;

    // The local component state
    const [userMessage, setUserMessage] = useState("");
    const [userMessages, setUserMessages] = useState<string[]>([]);
    const [botResponses, setBotResponses] = useState<string[]>([]);
    const [cachedMessages, setCachedMessages] = useState<cachedMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showInfoError, setShowInfoError] = useState(false);

    // Ref for keeping bottom of page in view
    const messageInputRef = useRef<any>(null);

    // Make an HTTP POST to the chat endpoint.
    const chat = async () => {
        setIsLoading(true);

        try {
            const response = await fetchWithTimeout("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cachedMessages, userMessage }),
            });
            const data = await response.json();

            const receivedMessage = data.choices[0].message.content;

            // Append new user message to local memory and restore input field to empty str
            setUserMessages([...userMessages, userMessage]);
            setUserMessage("");

            // Append new bot response to local memory
            setBotResponses([...botResponses, receivedMessage])

            const newCachedMessage = {
                user: userMessage,
                assistant: receivedMessage,
            }

            // reset cached messages (dependent on whether or not cache is full)
            if (cachedMessages.length < maxCachedMessages) {
                setCachedMessages([...cachedMessages, newCachedMessage]);
            } else {
                const withoutFirstCachedMessage = cachedMessages.slice(1);
                setCachedMessages([...withoutFirstCachedMessage, newCachedMessage]);
            }

            if (messageInputRef.current) {
                messageInputRef.current.scrollIntoView();
                messageInputRef.current.focus();
            }
        } catch (err: any) {
            if (err.name === 'AbortError') {
                setShowInfoError(true);
            } else {
                alert("Different error");
            }
        }

        setIsLoading(false);
    }

    const chatOnEnter = (e: any) => {
        if (e.keyCode == 13) {
            chat();
        }
    }

    // Render the message display. Could do this as a table to show message history.
    return <div className="Stack">
        <Stack spacing={2} padding={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {userMessages.map((userMessage, idx) => {
                            return (
                                <Fragment key={`messageCouple-${idx}`}>
                                    <TableRow key={`userMessage-${idx}`} sx={{backgroundColor: "#EEEEEE"}}>
                                        <TableCell width={5}>
                                            <PersonIcon />
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="body1">{userMessage}</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={`botResponse-${idx}`} sx={{backgroundColor: "#C4C7B6"}}>
                                        <TableCell width={5}>
                                            <MilitaryTechIcon />
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="body1">{botResponses[idx]}</Typography>
                                        </TableCell>
                                    </TableRow>
                                </Fragment>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Message
                messageInputRef={messageInputRef}
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                chatOnEnter={chatOnEnter}
                chat={chat}
                isLoading={isLoading}
            />

            <Snackbar 
                open={showInfoError} 
                autoHideDuration={6000} 
                onClose={() => setShowInfoError(false)} 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setShowInfoError(false)} severity="info" sx={{ width: '100%' }}>
                    Please try again.
                </Alert>
            </Snackbar>
        </Stack>
    </div>;
}
