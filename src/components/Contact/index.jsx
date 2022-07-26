import React from "react";
import emailjs from "emailjs-com";
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormInput,
    FormTextInput,
    FormH1,
    FormLabel,
    FormButton,
    ReturnIcon,
} from "./ContactElements";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hk8vwv9",
                "template_ys8mbsg",
                e.target,
                "mwpDeNU2ifCK33kVq"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
        e.target.reset();
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Luke Sutton</Icon>
                    <FormContent>
                        <Form onSubmit={sendEmail}>
                            <FormH1>Send me an email</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <FormLabel htmlFor="for">Email Address</FormLabel>
                            <FormInput
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                            <FormLabel htmlFor="for">Subject</FormLabel>
                            <FormInput
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                required
                            />
                            <FormLabel htmlFor="for">Text</FormLabel>
                            <FormTextInput
                                id=""
                                cols="30"
                                rows="12"
                                placeholder="Your message"
                                name="message"
                                required
                            />
                            <FormButton type="submit">Send</FormButton>
                            <ReturnIcon to="/">Return to main page</ReturnIcon>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Contact;
