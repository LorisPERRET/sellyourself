import "./Messages.css";
import React from 'react';
import HeaderCustom from "../../components/HeaderCustom";
import Message from "../../components/Message";
import LeftBar from "../../components/LeftBar";

const messages = [
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
    {photo: "DefaultPP.jpeg", prenom: "John", nom: "Doe", text: "Je suis un message"},
]

function Messages() {
    return (
        <div className='Messages'>
            <LeftBar/>
            <div className='Messages-center'>
                <div className="Messages-header">
                    <HeaderCustom title="Messages"/>
                </div>
                <div className="Messages-info">
                    {messages.map(({ photo, nom, prenom, text }, index) => (
                        <Message
                            photo={photo}
                            nom={nom}
                            prenom={prenom}
                            text={text}
                            key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Messages;