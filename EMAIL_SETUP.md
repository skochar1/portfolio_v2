# Email Contact Form Setup

This portfolio includes a functional email contact form using EmailJS. To enable email functionality, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key

## 2. Configure the Contact Form
In `/components/Contact.tsx`, replace the placeholder values:

```typescript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Your EmailJS public key

const result = await emailjs.send(
  "YOUR_SERVICE_ID",    // Your EmailJS service ID
  "YOUR_TEMPLATE_ID",   // Your EmailJS template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'shreya.kochar@columbia.edu'
  }
);
```

## 3. EmailJS Template Variables
Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_email}}` - Recipient email (shreya.kochar@columbia.edu)

## 4. Environment Variables (Recommended)
For better security, store your EmailJS credentials in environment variables:

1. Create a `.env.local` file in the project root
2. Add your credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Update the Contact component to use environment variables:
```typescript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  // ... template data
);
```

## 5. Test the Form
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Navigate to the contact section and test the form

The form will show success/error messages and disable the submit button while sending.