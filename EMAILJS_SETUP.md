# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: پیام جدید از وب‌سایت فانوس - {{subject}}

نام: {{from_name}}
ایمیل: {{from_email}}
تلفن: {{from_phone}}
موضوع: {{subject}}

پیام:
{{message}}

---
این پیام از فرم تماس وب‌سایت فانوس ارسال شده است.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Contact Component
Replace the placeholder values in `src/components/Contact.tsx`:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',        // Replace with your Service ID
  'YOUR_TEMPLATE_ID',       // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    to_email: 'info@fanoosai.com'
  },
  'YOUR_PUBLIC_KEY'         // Replace with your Public Key
);
```

## Step 6: Test the Form
1. Fill out the contact form
2. Submit and check if you receive the email
3. Check the browser console for any errors

## Alternative: Formspree (Even Easier)
If EmailJS seems complex, you can use Formspree:

1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get your form endpoint
3. Replace the form action with your Formspree endpoint
4. No JavaScript required!

## Alternative: Netlify Forms
If deploying on Netlify:
1. Add `data-netlify="true"` to your form
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify will handle form submissions automatically

## Security Notes
- EmailJS is client-side, so your keys are visible
- For production, consider using a backend service
- Rate limiting is recommended
- Always validate form data on the server side 