export const Notification = ({ notificationMessage }) => {
    const { message, type } = notificationMessage

    if (message === null) {return}

    const notificationStyle = type === 'success'
        ? { marginBottom:'10px', border: '3px solid green', borderRadius: '6px', padding: '10px', backgroundColor:'gainsboro', fontSize:'20px', color:'green' }
        : { marginBottom:'10px', border: '3px solid red', borderRadius: '6px', padding: '10px', backgroundColor:'gainsboro', fontSize:'20px', color:'red' }

    return (
        <div style={notificationStyle}>{message}</div>
    )
}