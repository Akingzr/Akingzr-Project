# Netlify Forms Setup Guide

Your contact form is now configured to work with Netlify Forms! Here's what you need to know:

## What's Been Done

1. **Form Configuration**: The contact form in `src/components/Contact.tsx` has been updated to work with Netlify Forms
2. **Static HTML**: A static HTML version of the form has been created in `public/contact.html` for Netlify detection
3. **Dependencies**: Removed EmailJS dependency since we're now using Netlify's built-in form handling

## How It Works

- When users submit the form, it's sent directly to Netlify
- Netlify will collect all form submissions and make them available in your Netlify dashboard
- The form includes spam protection via a honeypot field
- Form submissions are handled without any server-side code

## Netlify Dashboard Setup

After deploying to Netlify:

1. Go to your Netlify dashboard
2. Select your site
3. Navigate to "Forms" in the sidebar
4. You'll see all form submissions there
5. You can set up email notifications to get notified of new submissions

## Email Notifications

To receive email notifications for form submissions:

1. In your Netlify dashboard, go to Site settings > Forms
2. Click "Form notifications"
3. Add a new notification
4. Choose "Email notification"
5. Enter your email address
6. Select the "contact" form
7. Save the notification

## Spam Protection

The form includes built-in spam protection:
- Honeypot field (hidden from users)
- Netlify's built-in spam filtering
- You can enable additional spam filtering in your Netlify dashboard

## Form Fields

The form captures:
- Name (required)
- Email (required)
- Company (optional)
- Message (required)

## Testing

After deployment:
1. Visit your live site
2. Fill out the contact form
3. Check your Netlify dashboard under "Forms" to see the submission
4. If you set up email notifications, you should receive an email

## Troubleshooting

If forms aren't working:
1. Make sure the static HTML file `public/contact.html` is deployed
2. Check that the form has `data-netlify="true"` attribute
3. Verify the form name matches in both the React component and static HTML
4. Check your Netlify build logs for any errors

## Benefits of Netlify Forms

- No server-side code needed
- Built-in spam protection
- Form submissions stored in Netlify dashboard
- Easy to set up email notifications
- Integrates with Zapier and other services
- Free tier includes 100 submissions per month 