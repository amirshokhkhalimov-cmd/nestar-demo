import React from "react";
import { Stack, Box } from "@mui/material";

interface TopAgentCardProps {
  name?: string;
  role?: string;
  imageSrc?: string;
}

const TopAgentCard = ({
  name = "Agent",
  imageSrc = "/img/profile/girl.svg",
}: TopAgentCardProps) => {
  return (
   <Stack className={"top-agent-card"}>
  <img src={imageSrc} alt="agent" />

  <Box className={"agent-info"}>
    <strong>{name}</strong>
  </Box>
</Stack>
  );
};

export default TopAgentCard;