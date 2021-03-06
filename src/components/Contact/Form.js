import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Button from '../shared/Button';
import { color, transition } from '../../utils/style';

const inputStyle = css`
  background-color: ${color.accentLight};
  border: 0;
  border-bottom: 2px solid ${color.textDefault}22;
  display: block;
  font-size: 16px;
  margin-top: 0.25rem;
  padding: 0.5rem;
  transition: ${transition.duration} border-color ${transition.easing};

  &:focus {
    border-color: ${color.accent};
    outline: 0;
  }
`;

const Form = styled('form')`
  margin-top: 3rem;
  overflow: visible;
`;

const Label = styled('label')`
  color: ${color.textLight};
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  line-height: 1;
  text-transform: uppercase;
`;

const Input = styled('input')`
  ${inputStyle} max-width: 400px;
  width: 90vw;
`;

const Textarea = styled('textarea')`
  ${inputStyle} height: 10em;
  width: 100%;
`;

const Submit = Button.withComponent('button');

const HoneyPot = styled('div')`
  display: none;
`;

const ContactForm = ({ action, name }) => (
  <Form
    key="contact-form"
    name="contact"
    method="POST"
    action={action}
    data-netlify-honeypot="full-name"
    data-netlify="true"
  >
    <HoneyPot>
      <Label htmlFor="full-name">
        Don’t fill out this field if you’re a human.
      </Label>
      <Input type="text" id="full-name" name="full-name" />
    </HoneyPot>
    <Label htmlFor="fname">Name</Label>
    <Input type="text" id="fname" name="name" required />
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" name="email" required />
    <Label htmlFor="phone">Phone Number</Label>
    <Input type="tel" id="phone" name="phone" required />
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" name="message" required />
    <Submit type="submit">
      <span>Send Message</span>
    </Submit>
    <Input type="hidden" name="form-name" value="contact" />
  </Form>
);

ContactForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default ContactForm;
