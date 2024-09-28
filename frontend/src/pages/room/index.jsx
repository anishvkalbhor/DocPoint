import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Calling = () => {
    const { roomId } = useParams();
    
    const myMeeting = async (element) => {
        const appID = 1873291861;
        const serverSecret = "f9e0ee62534c98dca371dd9cd0363bf4";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, 
            roomId, Date.now().toString(), "Charis");

            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `http://localhost:5173/room/${roomId}`,

                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneOnNone,
                },
            });
    };

    return <div>
        <div ref={myMeeting} />
    </div>
};

export default Calling;