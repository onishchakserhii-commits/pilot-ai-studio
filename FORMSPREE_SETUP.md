# Formspree Setup Instructions

## Overview
The contact form on Pilot AI Studio uses Formspree to send emails to webpilot.montreux@gmail.com.

## Current Configuration
- **Formspree Endpoint**: https://formspree.io/f/xyzgvkdp
- **Email Recipient**: webpilot.montreux@gmail.com
- **Form ID**: xyzgvkdp

## Activation Steps

1. **First Submission**: When a user submits the contact form for the first time, Formspree will send an activation email to webpilot.montreux@gmail.com

2. **Check Email**: Open the email from Formspree and click the activation link

3. **Confirm**: After activation, all future form submissions will be automatically sent to your email

## Testing the Form

1. Navigate to the Contact section on the website
2. Fill in the form with test data
3. Click "Send Message"
4. Check webpilot.montreux@gmail.com for the activation email
5. Click the activation link
6. Submit the form again to confirm it works

## Form Fields

- **Name** (Required): Sender's name
- **Email** (Required): Sender's email for reply
- **Company**: Company name (optional)
- **Message** (Required): Inquiry message

## Features

✅ Email validation
✅ Loading state during submission
✅ Success/error messages
✅ Auto-reply to sender's email
✅ Privacy notice
✅ Responsive design

## Troubleshooting

If emails aren't received:
1. Check spam/junk folder
2. Verify the Formspree endpoint is correct
3. Ensure the form was activated via the confirmation email
4. Check Formspree dashboard at https://formspree.io for submission logs

## Alternative: Custom Backend

For more control, you can replace Formspree with a custom Node.js backend using:
- SendGrid API
- Nodemailer
- AWS SES
- Or any email service provider

Contact support for implementation details.
