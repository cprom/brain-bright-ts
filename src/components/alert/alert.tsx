import Alert from '@mui/material/Alert';

interface bannerProp {
    message: string
}

const AlertComponent = ({message}: bannerProp) => {
    return (
        <>
        <Alert severity="warning" color="warning" sx={{minWidth: 200}}>
            {message}
        </Alert>
        </>
    )
}

export default AlertComponent