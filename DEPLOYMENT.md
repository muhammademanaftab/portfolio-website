# Deployment Guide

This guide covers how to deploy your portfolio website to various platforms.

## 🐳 Docker Deployment

### Local Docker Deployment

1. **Build the Docker image:**
   ```bash
   docker build -t portfolio-website .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:80 portfolio-website
   ```

3. **Using Docker Compose:**
   ```bash
   docker-compose up -d
   ```

### Cloud Deployment with Docker

#### AWS ECS/Fargate
```bash
# Build and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account.dkr.ecr.us-east-1.amazonaws.com
docker tag portfolio-website:latest your-account.dkr.ecr.us-east-1.amazonaws.com/portfolio-website:latest
docker push your-account.dkr.ecr.us-east-1.amazonaws.com/portfolio-website:latest
```

#### Google Cloud Run
```bash
# Build and deploy
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/portfolio-website
gcloud run deploy portfolio-website --image gcr.io/YOUR_PROJECT_ID/portfolio-website --platform managed
```

#### Azure Container Instances
```bash
# Build and push to Azure Container Registry
az acr build --registry your-registry --image portfolio-website .
az container create --resource-group your-rg --name portfolio-website --image your-registry.azurecr.io/portfolio-website:latest --dns-name-label portfolio-website
```

## ☁️ Platform-as-a-Service Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify

1. **Connect your GitHub repository**
2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### Heroku

1. **Create a `static.json` file:**
   ```json
   {
     "root": "dist",
     "clean_urls": true,
     "routes": {
       "/**": "index.html"
     }
   }
   ```

2. **Deploy:**
   ```bash
   heroku create your-portfolio-app
   git push heroku main
   ```

### GitHub Pages

1. **Add GitHub Pages dependency:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🚀 Static Hosting

### AWS S3 + CloudFront

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to S3:**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront for HTTPS and caching**

### Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy:**
   ```bash
   firebase deploy
   ```

## 🔧 Environment Configuration

### Environment Variables

Create a `.env` file for local development:

```env
VITE_APP_TITLE=Muhammad Eman Aftab Portfolio
VITE_APP_DESCRIPTION=Computer Science Student & Full-Stack Developer
VITE_APP_URL=https://your-domain.com
```

### Build Optimization

1. **Enable gzip compression**
2. **Optimize images**
3. **Minify CSS and JavaScript**
4. **Use CDN for static assets**

## 📊 Performance Monitoring

### Google Analytics

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring

- **Lighthouse**: Run performance audits
- **WebPageTest**: Test loading speed
- **GTmetrix**: Monitor Core Web Vitals

## 🔒 Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Security Headers**: Configure in nginx.conf
3. **Content Security Policy**: Restrict resource loading
4. **Regular Updates**: Keep dependencies updated

## 📈 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        working-directory: ./
```

## 🎯 Domain Configuration

1. **Custom Domain**: Configure DNS settings
2. **SSL Certificate**: Enable HTTPS
3. **Redirects**: Set up www to non-www redirects
4. **Error Pages**: Configure 404 and 500 error pages

## 📱 Mobile Optimization

1. **Responsive Design**: Ensure mobile compatibility
2. **Touch Targets**: Optimize for touch interaction
3. **Loading Speed**: Optimize for mobile networks
4. **PWA**: Consider Progressive Web App features

## 🔄 Maintenance

1. **Regular Updates**: Keep dependencies updated
2. **Security Patches**: Monitor for vulnerabilities
3. **Performance Monitoring**: Track Core Web Vitals
4. **Backup Strategy**: Regular backups of content 