import "../index.css";
import { useState } from 'react';


export default function AuthForms() {
    const [ form, setForm ] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    return (
        <>
            <label className="label-input">First Name</label>
            <input type="text" value={form.firstName} onChange={(e) => {
                setForm({
                    ...form,
                    firstName: e.target.value,
                })
            }}></input>

            <label className="label-input">Last Name</label>
            <input type="text" value={form.lastName} onChange={(e) => {
                setForm({
                    ...form,
                    lastName: e.target.value,
                })
            }}></input>

            <label className="label-input">Email</label>
            <input type="email" value={form.email} onChange={(e) => {
                setForm({
                    ...form,
                    email: e.target.value,
                })
            }}></input>

            <label>{'FirstName:' + form.firstName + " - "} {'LastName:' + form.lastName + " - "} {'Email:' + form.email + " - "}</label>
        </>
    );
}