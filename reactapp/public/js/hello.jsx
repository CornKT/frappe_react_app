import React from "react";
import { createRoot } from "react-dom/client";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
  VideoConference,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import "./test.css";

const serverUrl = "wss://test-app-bf76unbz.livekit.cloud";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IiIsIm5hbWUiOiIiLCJ2aWRlbyI6eyJyb29tQ3JlYXRlIjp0cnVlLCJyb29tTGlzdCI6dHJ1ZSwicm9vbVJlY29yZCI6ZmFsc2UsInJvb21BZG1pbiI6ZmFsc2UsInJvb21Kb2luIjp0cnVlLCJyb29tIjoidGVzdCIsImNhblB1Ymxpc2giOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWUsImNhblB1Ymxpc2hTb3VyY2VzIjpbXSwiY2FuVXBkYXRlT3duTWV0YWRhdGEiOmZhbHNlLCJpbmdyZXNzQWRtaW4iOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJyZWNvcmRlciI6ZmFsc2UsImFnZW50IjpmYWxzZX0sInNpcCI6eyJhZG1pbiI6ZmFsc2UsImNhbGwiOmZhbHNlfSwiYXR0cmlidXRlcyI6e30sIm1ldGFkYXRhIjoiIiwic2hhMjU2IjoiIiwia2luZCI6IiIsInN1YiI6InRlc3QiLCJpc3MiOiJBUEk1UWk4WnlhNldHNEsiLCJuYmYiOjE3MzAzNjY0NjMsImV4cCI6MTczMDM4ODA2M30.vjGkrm5U2C1I0CZWckjuFWGe5Xko8sqrG_pX_VCUoJY";

function App() {
  return (
    <div className="app-wrapper">
      <style>
        {`
            @import url(./css/scss/components/controls/index.css);
            @import url(./css/scss/components/layout/index.css);
            @import url(./css/scss/components/participant/index.css);
            @import url(./css/scss/components/index.css);
            @import url(./css/scss/themes/default.css);
            @import url(./css/scss/themes/huddle.css);
            @import url(./css/scss/prefabs/audio-conference.css);
            @import url(./css/scss/prefabs/chat.css);
            @import url(./css/scss/prefabs/control-bar.css);
            @import url(./css/scss/prefabs/index.css);
            @import url(./css/scss/prefabs/prejoin.css);
            @import url(./css/scss/prefabs/video-conference.css);
            @import url(./css/scss/index.css);

            @import url(./css/dist/general/components/controls/index.css);
            @import url(./css/dist/general/components/layout/index.css);
            @import url(./css/dist/general/components/participant/index.css);
            @import url(./css/dist/general/components/index.css);

            @import url(./css/dist/general/prefabs/audio-conference.css);
            @import url(./css/dist/general/prefabs/chat.css);
            @import url(./css/dist/general/prefabs/control-bar.css);
            @import url(./css/dist/general/prefabs/index.css);
            @import url(./css/dist/general/prefabs/prejoin.css);
            @import url(./css/dist/general/prefabs/video-conference.css);

            @import url(./css/dist/general/themes/default.css);
            @import url(./css/dist/general/themes/huddle.css);

            @import url(./css/dist/general/index.css);

          `}
      </style>
      <h1
        style={{
          color: "red",
          backgroundColor: "#000",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Hello World App!
      </h1>
      <LiveKitRoom
        video={true}
        audio={true}
        token={accessToken}
        serverUrl={serverUrl}
        data-lk-theme="default"
        style={{ height: "100vh" }}
      >
        <VideoConference />
        <p>hi</p>
        <RoomAudioRenderer />
        <ControlBar />
      </LiveKitRoom>
    </div>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );

  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      <ParticipantTile />
    </GridLayout>
  );
}

export default function hello(container) {
  const root = createRoot(container);
  root.render(<App />);
}
