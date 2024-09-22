import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";

function Contact() {
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Email:", email)
        console.log("Message:", message)
    }
    return (
        <Box sx={{ margin: "auto", padding: 5 }}>
            <Typography variant="h5" gutterBottom>
                Contact me
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: "#997f7c",
                        color: "#fff",
                        "&:hover": {
                        backgroundColor: "#756260",
                        },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default Contact;