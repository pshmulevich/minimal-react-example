// In order to run React after the page is loaded, create a "load" event handler
window.addEventListener("load", runReact);

// This function will be called after the page DOM is fully loaded
function runReact() {
    ReactDOM.render(
            React.createElement(HelloWorldBanner), document.getElementById('content')
    );
}
