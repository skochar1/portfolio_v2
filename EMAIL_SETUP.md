# 📧 Email Contact Form Setup Guide

This portfolio includes a functional email contact form using EmailJS. Follow these steps to set up email functionality:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a **free account**
2. Verify your email address

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - **Other**: Follow provider-specific setup
4. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Settings**:
   - **Template Name**: "Contact Form"
   - **Subject**: `New message from {{from_name}} - {{subject}}`
   - **Content**: 
   ```
   Hello Shreya,

   You received a new message from your portfolio contact form:

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}

   Best regards,
   Your Portfolio Contact Form
   ```
4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** in EmailJS dashboard
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `abcdefghijk123`)

### Step 5: Configure Environment Variables
1. Create a `.env.local` file in your project root:
```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here  
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual IDs from steps 2-4

### Step 6: Test the Form
1. **Restart your dev server**: `npm run dev`
2. **Navigate to the contact section** on your site
3. **Fill out and submit the test form**
4. **Check your email** - you should receive the message!

## 🔧 Troubleshooting

### Form not sending emails?
- ✅ Check that all environment variables are set correctly
- ✅ Restart the development server after adding `.env.local`
- ✅ Verify your EmailJS service is connected and active
- ✅ Check browser console for error messages

### Environment variables not working?
- ✅ Make sure `.env.local` is in the project root (same level as `package.json`)
- ✅ Restart the development server (`npm run dev`)
- ✅ Variables must start with `VITE_` for Vite to recognize them

### Gmail/Email service issues?
- ✅ Enable 2-factor authentication on your Gmail account
- ✅ Generate an app-specific password if using Gmail
- ✅ Check EmailJS service status in dashboard

## 📝 Template Variables Reference
Your EmailJS template can use these variables:
- `{{from_name}}` - Sender's name from the form
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Email subject from the form
- `{{message}}` - Message content from the form
- `{{to_email}}` - Your email (shreya.kochar@columbia.edu)

## 🔒 Security Notes
- ✅ Never commit `.env.local` to Git (it's already in `.gitignore`)
- ✅ Use environment variables for all sensitive data
- ✅ EmailJS public key is safe to use client-side
- ✅ The form includes basic validation and error handling

## 🎯 Expected Behavior
When everything is set up correctly:
- ✅ Form shows "Sending..." when submitting
- ✅ Success message appears when email is sent
- ✅ Form fields clear after successful submission
- ✅ Error message shown if something goes wrong
- ✅ You receive emails at shreya.kochar@columbia.edu

---

**Need help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or feel free to reach out!