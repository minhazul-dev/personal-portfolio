import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import Header from './Header/Header';
import MyNavbar from './MyNavbar/MyNavbar';

const Home = () => {
    return (
        <div>
            <MyNavbar/>
            <Header/>
        </div>
    );
};

export default Home;