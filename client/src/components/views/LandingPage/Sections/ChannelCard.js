import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';
import { Card } from 'antd';

function ChatCard(props) {
    const routeLink = "/chat?cid=" + props._id;
    return (
        <div style={{ width: '100%' }}>
            <Card bordered={false} style={{ width: 300 }}>
                <a href={routeLink}><strong>{props.channelName}</strong></a>
            </Card>
        </div>
    )
}

export default ChatCard;

