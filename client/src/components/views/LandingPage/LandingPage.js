import React, { Component } from 'react'
import ChannelCard from "./Sections/ChannelCard";
import { registerChannel, getChannels, afterRegisterChannel } from "../../../_actions/channel_actions";
import { Button, Modal, Input } from 'antd';

import { connect } from "react-redux";



class LandingPage extends Component {

    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        channelName: '',
        channelsFetched: false,
    };


    componentDidMount() {

    }
    componentDidUpdate() {
        if (!this.state.channelsFetched) {
            this.props.dispatch(getChannels(this.props.user.userData._id));
            this.setState({channelsFetched: true})
        }
    }

    handleOk = (e) => {
        const that = this;
        e.preventDefault();
        this.setState({
            confirmLoading: true,
        });
        let dataToSubmit = {
            channelName: this.state.channelName,
            owner: that.props.user.userData._id
        };

        let response = registerChannel(dataToSubmit);

        console.log("channel registered. response: ", response);
        setTimeout(() => {
            window.location.reload();
        }, 300);

        //this.props.dispatch(afterRegisterChannel(response));

        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };


    handleCreateChannel = () => {
        this.setState({
            visible: true,
        });
    }

    handleChannelNameChange = (e) => {
        e.preventDefault();
        this.setState({
            channelName: e.target.value,
        })
    }

    renderChannels = () => {
        return this.props.channels.channels.map((channel) => (
            <ChannelCard key={channel._id}  {...channel} />
        ));
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;

        return (
            <React.Fragment>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Button type="primary" disabled={false} onClick={this.handleCreateChannel}>
                        Create New Channel
                    </Button>
                    <Modal
                        title="Create a new channel"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <Input
                            id="txtChannelName"
                            placeholder="Enter Channel Name"
                            type="text"
                            onChange={this.handleChannelNameChange}
                            text={this.state.channelName}
                        />
                    </Modal>
                    <br /><br />
                    {this.props.channels.channels ? (this.renderChannels()) : null}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        channels: state.channel
    }
}

export default connect(mapStateToProps)(LandingPage);
