function LoadingStatus({theme}) {
    return <div className={"laoding-container"}>
        <h2>Generating your {theme} Story</h2>

        <div className="loading-animation">
            <div className="spinner" />
        </div>

        <p className="loading-info">
            Please wait while we generate your story...
        </p>
    </div>
}

export default LoadingStatus;