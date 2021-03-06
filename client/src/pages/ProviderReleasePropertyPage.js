import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import HomePageFooter from "../components/HomePageFooter";
import NavigationBarWithoutSession from "../components/NavigationBarWithoutSession";
import NavigationBarWithSession from "../components/NavigationBarWithSession";

//sub components import
import ProviderReleaseInformationContainer from '../components/ProviderReleaseInformationContainer';
const ProviderReleasePropertyHeader = () => {
    return (
        <div>
            <Helmet>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <title>Release Information</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {/* <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css" />
            <link rel="stylesheet" href="css/style.css" type="text/css"/>
            <script src="js/ReleaseInfromation.js"></script> */}
            </Helmet>
        </div>
    )
} 


class UserProfilePage extends Component {
    render() {
        return (
            <div>
                <ProviderReleasePropertyHeader/>

                {localStorage.getItem('session-firstName') === null ? <NavigationBarWithoutSession/> : <NavigationBarWithSession/>}

                <ProviderReleaseInformationContainer/>

                <HomePageFooter/>
            </div>
        )
    }
}


export default UserProfilePage;