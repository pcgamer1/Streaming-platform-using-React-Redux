import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, delelteStream } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        const id = this.props.match.params.id
        return (
            <>
                <button onClick={() => this.props.delelteStream(id) } className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </>
        )
    }

    renderContent() {
        if(!this.props.stream) 
            return <div>Are you sure you want to delete this stream?</div>
        return <div>{`Are you sure you want to delete the stream with title ${this.props.stream.title}`}</div>
    }

    render() {
        if(!this.props.stream) return <div>Loading...</div>
        return (
            <Modal 
                title='Delete Stream' 
                content={this.renderContent()}
                actions={this.renderActions()} 
                onDismiss={() => history.push('/')} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect( mapStateToProps, {fetchStream, delelteStream} )(StreamDelete)