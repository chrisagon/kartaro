import React from 'react';
import { Bubble } from "@typebot.io/react";

const QwadrageChatbot: React.FC = () => {
  return (
    <Bubble
      typebot="decklab"
      apiHost="https://typebot.io"
      previewMessage={{
        message: "Une question sur Kartaro ?",
        autoShowDelay: 10000,
        avatarUrl:
          "https://s3.typebot.io/public/workspaces/clkfocv2k000sia0f25qti23d/typebots/cm089b7w800017ebgqpnlznom/hostAvatar?v=1724511743007",
      }}
      theme={{ button: { backgroundColor: "#DE8031" } }}
    />
  );
};

export default QwadrageChatbot;