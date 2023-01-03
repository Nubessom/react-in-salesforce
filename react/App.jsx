import _ from "lodash";
import React from "react";

export class App extends React.Component{
    componentDidMount() {
        const componentName = 'c:exampleLWCComponent';
        const appName = 'c:exampleLWCDependencyApp';
        const token = JSON.stringify(document.getElementById("session").getAttribute("value"));
        const orgUrl = 'https://your-org.my.salesforce.com';
        //you can pass any data you may need to the LWC component
        const additionalInfo = 'Whatever info that needs to be passed to LWC';
        this.loadScript(componentName, appName, token, orgUrl, additionalInfo);
    }
    loadScript(componentName, appName, token, orgUrl, additionalInfo ) {
        const script = document.createElement("script");

        script.src = orgUrl + "/lightning/lightning.out.js";
        script.async = true;
        script.onload = () => {
            $Lightning.use(appName, function() {
                $Lightning.createComponent(componentName, { additionalInfo : additionalInfo }, 'lightning', function() {
                });
            }, orgUrl ,token);
        };
        document.body.appendChild(script);
    }
    render() {
        return (<div id="lightning"></div>);
    }
}

export default App;
