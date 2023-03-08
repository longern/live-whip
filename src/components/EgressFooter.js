import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";

import Messages from "./Messages";

export default function Footer({
  onChatSend = () => {},
  onFullscreenClick = () => {},
}) {
  function handleChatInput(e) {
    if (e.key === "Enter") {
      if (!e.target.value || e.target.value.length > 100) return;
      onChatSend(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div
      className="footer"
      style={{
        position: "absolute",
        bottom: 0,
        padding: 8,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Stack direction="column">
        <Messages></Messages>
        <Stack direction="row" spacing={1}>
          <TextField
            id="chat-input"
            variant="outlined"
            fullWidth
            size="small"
            uncontrolled
            onKeyDown={handleChatInput}
          />
          <IconButton onClick={() => onFullscreenClick()}>
            <FullscreenIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
}
