# Digital Zone SSO Staging Project (https://gileaddigitalzone.com)

## Project Overview
This project is a Gatsby-based web application, designed to integrate single sign-on (SSO) functionality for the Digital Zone platform. The project is built using JavaScript and includes various configurations for code formatting and version management.

### Contents:
- **gatsby-browser.js**: Browser-related configuration for Gatsby.
- **gatsby-config.js**: Main configuration file for the Gatsby project.
- **src/**: Contains the source code for the application.
- **static/**: Contains static assets used within the application.
- **package.json** & **package-lock.json**: Lists the Node.js dependencies and scripts for the project.

## How to Use
### Local Setup
1. **Clone the repository** to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. **Install the required dependencies** using npm (Node.js package manager):
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run develop
   ```
   This will start the Gatsby development server, and the application will be accessible at `http://localhost:8000`.

### Build for Production
To build the project for production, you can use the following command:
```bash
npm run build
```
This will output the production-ready files in the `public` directory.

### Deployment
This project can be deployed on various platforms like **Netlify**, **Heroku**, or any server that supports static hosting.

#### Netlify Deployment
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the project folder into the Netlify dashboard, or link it directly from your GitHub repository.
3. Netlify will automatically detect the Gatsby project and deploy it.

#### Heroku Deployment (Optional)
If you prefer to use Heroku, you will need to set up a Node.js environment:
1. Log in to [Heroku](https://www.heroku.com/).
2. Create a new app and push the repository to Heroku.
3. Heroku will detect the Node.js environment and deploy the app.

## Environment Variables
Depending on the SSO implementation and other settings, you may need to configure environment variables. Add them to your deployment settings (e.g., Netlify or Heroku) as needed.
In the gatsby-config.js, there is a Google Analytics trackingId hardcoded as UA-167767244-1 -- you will need to update this as necessary.

## License
This project is private and internal to `thedifferenceconsulting.com` for client use only. Unauthorized use is prohibited.

For further assistance, you can contact:
- Heather Renze (CTO, @heathriel on GitHub)
- Braulio Buccio (DevOps, @beebucio on GitHub)

