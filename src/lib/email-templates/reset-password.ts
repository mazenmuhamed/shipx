// TODO: Fix this template
export const resetPasswordEmailTemplate = (url: string) => {
  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your Password - ShipX</title>
        <style>
          /* Reset styles */
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f4f7fa;
          }
          
          /* Container */
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          
          /* Email card */
          .email-card {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }
          
          /* Header */
          .header {
            padding: 30px;
            text-align: center;
            background-color: #ffffff;
            border-bottom: 1px solid #f0f0f0;
          }
          
          
          /* Content */
          .content {
            padding: 30px;
          }
          
          h1 {
            font-size: 24px;
            font-weight: 600;
            color: #111827;
            margin-top: 0;
            margin-bottom: 20px;
          }

          h2 {
            font-size: 20px;
            font-weight: 600;
            color: #111827;
            margin-top: 0;
            margin-bottom: 20px;
          }
          
          p {
            margin-bottom: 24px;
            color: #4b5563;
          }
          
          /* Button */
          .button-container {
            text-align: center;
            margin: 32px 0;
          }
          
          .verify-button {
            display: inline-block;
            background-color: #2563eb;
            color: #ffffff;
            font-weight: 500;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 6px;
            text-align: center;
            transition: background-color 0.15s ease;
          }
          
          .verify-button:hover {
            background-color: #1d4ed8;
          }
          
          /* Code block */
          .verification-code {
            background-color: #f9fafb;
            border-radius: 6px;
            padding: 16px;
            text-align: center;
            font-family: monospace;
            font-size: 24px;
            color: #111827;
            margin: 24px 0;
          }
          
          /* Footer */
          .footer {
            padding: 24px 30px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            background-color: #f9fafb;
          }
          
          .footer p {
            margin: 5px 0;
            color: #6b7280;
          }
          
          .footer a {
            color: #2563eb;
            text-decoration: none;
          }
          
          /* Utility */
          .text-sm {
            font-size: 14px;
          }
          
          .text-center {
            text-align: center;
          }
          
          .mt-8 {
            margin-top: 32px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email-card">
            <div class="header">
              <h1>ShipX</h1>
            </div>
            
            <div class="content">
              <h2>Reset Your Password</h2>
                
              <p>Hello,</p>
                
              <p>We received a request to reset your password for your ShipFast account. To reset your password, please click the button below:</p>

              <div class="button-container">
                <a href="${url}" class="verify-button">Verify Email Address</a>
              </div>
              
              <p>If the button above doesn't work, you can also reset your password by entering this link:</p>
              
              <div class="verification-code">${url}</div>
              
              <div class="security-note">
                <p><strong>Important:</strong> If you didn't request this password reset, please ignore this email or contact our support team immediately.</p>
              </div>
                
              <p class="text-sm">This password reset link and code will expire in 1 hour for security reasons.</p>
              
              <p class="mt-8">Happy shipping,<br>The ShipX Team</p>
            </div>
            
            <div class="footer">
              <p>© 2025 ShipX. All rights reserved.</p>
              <p>123 Shipping Lane, Delivery City, DC 12345</p>
              <p>
                <a href="/#">Unsubscribe</a> • 
                <a href="/#">Privacy Policy</a> • 
                <a href="/#">Help Center</a>
              </p>
            </div>
          </div>
        </div>
      </body>
   </html>
  `
}
