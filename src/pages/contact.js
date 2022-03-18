import React from "react";
import '../styles/contact.css';
import API_ENDPOINTS from "../services/service-endpoints.ts";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] }
    }

    componentDidMount() {
        const url = API_ENDPOINTS.getContacts;
        fetch(url).then(res => res.json()).then(data => this.setState({ contacts: data }));
    }

    static getContactList(contacts) {
        if(contacts?.data){
            return (
                <>
                    {contacts.data.map((c) => 
                        <div className='contact-info' key={c.id}>
                            <div> 
                                <img src={c.avatar} alt='avatar' /></div>
                            <div>
                                <p>{c.first_name}</p>
                                <p>
                                    {c.last_name}
                                </p>
                                <p>
                                    {c.email}
                                </p>
                            </div>
                        </div>
                    )}
                </>)
        }
       
    }

    render() {
        const contacts = this.state.contacts;
        const content = <>
            {Contact.getContactList(contacts)}
        </>
        return (
            <div>
                <h2>Contact</h2>
                <div className='contact-container'>
                    {content}
                </div>
            </div>

        )
    }
}