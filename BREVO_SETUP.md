# Brevo (Sendinblue) Email Service Setup

This application uses Brevo (formerly Sendinblue) for sending transactional emails via SMTP.

## 🔑 Getting Started with Brevo

### 1. Create a Brevo Account
- Go to [Brevo](https://www.brevo.com/) and sign up for a free account
- Verify your account via email

### 2. Get Your API Key and SMTP Credentials
1. Log in to your Brevo dashboard
2. Navigate to **Settings** → **SMTP & API**
3. You'll find:
   - **API Key** (v3) - for the API client
   - **SMTP Credentials**:
     - Login (email)
     - Master Password (SMTP key)
   - Click "Generate a new SMTP key" if needed

### 3. Configure Environment Variables

Add these to your `.env` file:

```env
# Brevo API & SMTP Configuration
BREVO_API_KEY=your_brevo_api_key_v3_here
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your_brevo_login_email
BREVO_SMTP_KEY=your_brevo_smtp_master_password

# Sender Email Configuration
EMAIL_FROM=nancykumari742004@gmail.com
EMAIL_FROM_NAME=Sintu Decorators
```

### 4. Verify Your Sender Email

⚠️ **Important**: Before sending emails, you must verify your sender email address:

1. Go to **Senders & IP** → **Senders**
2. Add and verify `nancykumari742004@gmail.com` (or your preferred sender email)
3. Follow the verification email instructions
4. Wait for verification to complete (usually takes a few minutes)

## 📧 Email Features

The application sends beautiful HTML emails to customers when they submit a contact form, including:

- ✨ Welcome message with their event details
- 📋 Summary of their inquiry (event type, date, guest count, etc.)
- ⏱️ What to expect next
- 📞 Contact information
- 🎨 Branded design with Sintu Decorators theme

## 🧪 Testing Email Sending

### Local Testing

1. Make sure your server is running:
   ```bash
   npm run server
   ```

2. Submit a test contact form through your application

3. Check the server logs for:
   ```
   [Email] Confirmation sent to [email] via Mailjet
   ```

### Troubleshooting

**Common Issues:**

1. **"Invalid API Key" or "Authentication Failed" Error**
   - Double-check your `BREVO_API_KEY`, `BREVO_SMTP_USER`, and `BREVO_SMTP_KEY` in `.env`
   - Ensure there are no extra spaces or quotes
   - Make sure you're using the SMTP key (master password), not the API key for SMTP auth

2. **"Sender email not verified" Error**
   - Verify your sender email in Brevo dashboard
   - Wait for verification to complete

3. **Emails Not Being Received**
   - Check spam/junk folder
   - Verify the recipient email is correct
   - Check Brevo dashboard for delivery status

4. **Rate Limiting**
   - Free Brevo accounts have sending limits (300 emails/day)
   - Upgrade your plan if needed

## 📊 Monitoring

You can monitor email delivery in your Brevo dashboard:
- **Statistics** → View send/delivery/open rates
- **Email Logs** → Track individual email status
- **Real-time Analytics** → See emails being sent

## 🔄 Migration from Mailjet

This project has been updated to use Brevo (Sendinblue) SMTP service. The key changes:

- ✅ Using `nodemailer` with Brevo SMTP credentials
- ✅ Brevo API v3 SDK included for campaign capabilities
- ✅ Simplified SMTP configuration
- ✅ Same beautiful email templates maintained

## 📚 Additional Resources

- [Brevo Documentation](https://developers.brevo.com/)
- [Brevo API v3 SDK (Node.js)](https://github.com/sendinblue/APIv3-nodejs-library)
- [SMTP Configuration Guide](https://developers.brevo.com/docs/smtp-and-api)

## 💡 Tips

- **Development**: Use a test email address for development
- **Production**: Ensure you have a paid plan for higher sending limits
- **Monitoring**: Regularly check your Brevo dashboard for bounce rates
- **Compliance**: Follow email best practices and include unsubscribe links for marketing emails
