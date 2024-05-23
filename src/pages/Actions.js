import { IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const Actions = () => {
  return (
    <div className="actions">
      <IconButton
        size="small"
        sx={{
          backgroundColor: "#198754",
          "&:hover": { backgroundColor: "#198754" },
        }}
      >
        <AddIcon />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          backgroundColor: "#0d6efd",
          "&:hover": { backgroundColor: "#0d6efd" },
        }}
      >
        <CachedIcon />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          backgroundColor: "#fff",
          "&:hover": { backgroundColor: "#fff" },
        }}
      >
        <CreateIcon sx={{color:"black"}} />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          backgroundColor: "#FF0000",
          "&:hover": { backgroundColor: "#FF0000" },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Actions;
