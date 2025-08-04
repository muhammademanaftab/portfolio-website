# Portfolio Backend API

A Laravel-based REST API backend for the portfolio website. This provides a robust, scalable backend with SQLite database storage.

## 🚀 Features

- **RESTful API**: Clean, well-structured API endpoints
- **SQLite Database**: Lightweight, file-based database storage
- **Eloquent Models**: Laravel's powerful ORM for data management
- **API Controllers**: Organized controller structure
- **Database Migrations**: Version-controlled database schema
- **Seeders**: Pre-populated with portfolio data
- **CORS Support**: Cross-origin resource sharing enabled

## 🛠️ Tech Stack

- **Framework**: Laravel 11
- **Database**: SQLite
- **API**: RESTful endpoints
- **Authentication**: Laravel Sanctum (ready for future use)

## 📋 Prerequisites

- PHP 8.2 or higher
- Composer
- SQLite extension for PHP

## 🚀 Quick Start

### 1. Install Dependencies

```bash
composer install
```

### 2. Environment Setup

Copy the environment file:
```bash
cp .env.example .env
```

Update the database configuration in `.env`:
```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

### 3. Generate Application Key

```bash
php artisan key:generate
```

### 4. Create SQLite Database

```bash
touch database/database.sqlite
```

### 5. Run Migrations

```bash
php artisan migrate
```

### 6. Seed Database

```bash
php artisan db:seed
```

### 7. Start Development Server

```bash
php artisan serve
```

The API will be available at `http://localhost:8000`

## 📚 API Endpoints

### Portfolio Data

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio/overview` | Get personal info and quick facts |
| GET | `/api/portfolio/education` | Get education details |
| GET | `/api/portfolio/experience` | Get work experience |
| GET | `/api/portfolio/projects` | Get all projects |
| GET | `/api/portfolio/skills` | Get skills by category |
| GET | `/api/portfolio/certifications` | Get all certifications |
| GET | `/api/portfolio/contact` | Get contact information |

### Example Response

```json
{
  "personal_info": {
    "name": "Muhammad Eman Aftab",
    "title": "Computer Science Student & Full-Stack Developer",
    "location": "Budapest, Hungary",
    "email": "emanaftab2022@gmail.com",
    "phone": "+36 20 252 6795",
    "github": "https://github.com/muhammademanaftab",
    "linkedin": "https://linkedin.com/in/muhammademanaftab"
  },
  "quick_facts": {
    "education": "CS @ ELTE",
    "experience": "Student Mentor",
    "projects": "8+ Completed",
    "certifications": "12+ Earned"
  }
}
```

## 🗄️ Database Schema

### Projects Table
- `id` - Primary key
- `title` - Project title
- `description` - Project description
- `tech_stack` - JSON array of technologies
- `features` - JSON array of features
- `icon` - Icon name
- `icon_color` - Icon color
- `github_url` - GitHub repository URL
- `live_url` - Live project URL
- `image_url` - Project image URL
- `is_featured` - Featured project flag
- `order` - Display order
- `created_at`, `updated_at` - Timestamps

### Skills Table
- `id` - Primary key
- `name` - Skill name
- `category` - Skill category
- `proficiency_level` - Skill level (beginner/intermediate/advanced/expert)
- `icon` - Skill icon
- `order` - Display order
- `created_at`, `updated_at` - Timestamps

### Certifications Table
- `id` - Primary key
- `name` - Certification name
- `issuer` - Certification issuer
- `issue_date` - Issue date
- `expiry_date` - Expiry date
- `credential_id` - Credential ID
- `credential_url` - Credential URL
- `is_featured` - Featured certification flag
- `order` - Display order
- `created_at`, `updated_at` - Timestamps

## 🔧 Configuration

### Database Configuration

The application uses SQLite by default. To change to another database:

1. Update `.env` file with your database credentials
2. Run migrations: `php artisan migrate:fresh`
3. Seed the database: `php artisan db:seed`

### CORS Configuration

CORS is configured to allow requests from the React frontend. Update `config/cors.php` if needed.

## 🧪 Testing

Run the test suite:

```bash
php artisan test
```

## 📦 Deployment

### Local Development

```bash
php artisan serve
```

### Production Deployment

1. Set environment to production
2. Optimize for production:
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```
3. Deploy to your preferred hosting platform

### Docker Deployment

```bash
docker build -t portfolio-backend .
docker run -p 8000:8000 portfolio-backend
```

## 🔄 Database Management

### Reset Database

```bash
php artisan migrate:fresh --seed
```

### Add New Data

1. Create a new seeder: `php artisan make:seeder NewDataSeeder`
2. Add data to the seeder
3. Run: `php artisan db:seed --class=NewDataSeeder`

### Backup Database

```bash
cp database/database.sqlite database/backup.sqlite
```

## 🚀 Integration with Frontend

The React frontend can consume this API by making HTTP requests to the endpoints. Example:

```javascript
// Fetch portfolio overview
const response = await fetch('http://localhost:8000/api/portfolio/overview');
const data = await response.json();
```

## 🔒 Security

- CORS is configured for cross-origin requests
- Input validation is implemented
- SQL injection protection via Eloquent ORM
- XSS protection via Laravel's built-in security features

## 📈 Performance

- Database queries are optimized
- Response caching can be implemented
- API rate limiting can be added
- Database indexing for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Muhammad Eman Aftab**
- Email: emanaftab2022@gmail.com
- GitHub: [@muhammademanaftab](https://github.com/muhammademanaftab)
- LinkedIn: [muhammademanaftab](https://linkedin.com/in/muhammademanaftab)

---

⭐ **Star this repository if you found it helpful!**
