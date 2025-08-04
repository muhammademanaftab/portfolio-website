<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Certification;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed Projects
        $projects = [
            [
                'title' => 'Pet Catalogue - React & Laravel Web App',
                'description' => 'Full-stack web application for cataloguing and managing pets with CRUD capabilities, birth/death tracking, and dynamic statistics.',
                'tech_stack' => ['React', 'Laravel', 'TailwindCSS', 'SQLite', 'Laravel Blade'],
                'features' => ['Full CRUD Operations', 'Dynamic Statistics', 'Clean UI/UX'],
                'icon' => 'code',
                'icon_color' => 'blue',
                'is_featured' => true,
                'order' => 1
            ],
            [
                'title' => 'Laravel LMS - Learning Management System',
                'description' => 'Comprehensive learning platform with role-based dashboards for teachers and students, featuring task management and secure authentication.',
                'tech_stack' => ['Laravel 12', 'SQLite', 'TailwindCSS', 'PHP', 'Laravel Breeze'],
                'features' => ['Role-based Dashboards', 'Task Assignment', 'Secure Authentication'],
                'icon' => 'users',
                'icon_color' => 'green',
                'is_featured' => true,
                'order' => 2
            ],
            [
                'title' => 'Task Manager Pro',
                'description' => 'Flask-based productivity application with priority filtering, due date tracking, and real-time reminders.',
                'tech_stack' => ['Flask', 'Python', 'SQLite', 'Bootstrap', 'HTML/CSS'],
                'features' => ['Priority Filtering', 'Due Date Tracking', 'Real-time Reminders'],
                'icon' => 'zap',
                'icon_color' => 'yellow',
                'is_featured' => true,
                'order' => 3
            ],
            [
                'title' => 'Atmospheric Layer Simulation',
                'description' => 'Advanced OOP simulation of atmospheric layer interactions using design patterns for modularity and scalability.',
                'tech_stack' => ['C#', 'OOP', 'Design Patterns', 'Unit Testing'],
                'features' => ['Visitor Pattern', 'Singleton Pattern', 'Modular Design'],
                'icon' => 'trending-up',
                'icon_color' => 'purple',
                'is_featured' => true,
                'order' => 4
            ],
            [
                'title' => 'Java Board Game Simulation',
                'description' => 'Custom board game with dynamic movement logic, comprehensive player management, and extensive unit testing.',
                'tech_stack' => ['Java', 'Swing', 'JUnit 5'],
                'features' => ['Dynamic Movement', 'Score Management', 'Unit Tested'],
                'icon' => 'star',
                'icon_color' => 'orange',
                'is_featured' => true,
                'order' => 5
            ],
            [
                'title' => 'Vlera AI - Static Website',
                'description' => 'Responsive informational website showcasing AI assistant applications and impact.',
                'tech_stack' => ['HTML5', 'CSS', 'Bootstrap'],
                'features' => ['Responsive Design', 'Modern UI', 'AI Focus'],
                'icon' => 'cpu',
                'icon_color' => 'cyan',
                'is_featured' => true,
                'order' => 6
            ]
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        // Seed Skills
        $skills = [
            // Programming Languages
            ['name' => 'Java', 'category' => 'Programming Languages', 'proficiency_level' => 'advanced', 'order' => 1],
            ['name' => 'Python', 'category' => 'Programming Languages', 'proficiency_level' => 'advanced', 'order' => 2],
            ['name' => 'C', 'category' => 'Programming Languages', 'proficiency_level' => 'intermediate', 'order' => 3],
            ['name' => 'C#', 'category' => 'Programming Languages', 'proficiency_level' => 'intermediate', 'order' => 4],
            ['name' => 'C++', 'category' => 'Programming Languages', 'proficiency_level' => 'intermediate', 'order' => 5],
            ['name' => 'SQL', 'category' => 'Programming Languages', 'proficiency_level' => 'advanced', 'order' => 6],
            ['name' => 'JavaScript', 'category' => 'Programming Languages', 'proficiency_level' => 'advanced', 'order' => 7],
            ['name' => 'HTML', 'category' => 'Programming Languages', 'proficiency_level' => 'expert', 'order' => 8],
            ['name' => 'CSS', 'category' => 'Programming Languages', 'proficiency_level' => 'expert', 'order' => 9],
            ['name' => 'PHP', 'category' => 'Programming Languages', 'proficiency_level' => 'advanced', 'order' => 10],
            ['name' => 'Clean', 'category' => 'Programming Languages', 'proficiency_level' => 'beginner', 'order' => 11],
            ['name' => 'Haskell', 'category' => 'Programming Languages', 'proficiency_level' => 'beginner', 'order' => 12],

            // Frontend Development
            ['name' => 'React', 'category' => 'Frontend Development', 'proficiency_level' => 'advanced', 'order' => 1],
            ['name' => 'TypeScript', 'category' => 'Frontend Development', 'proficiency_level' => 'intermediate', 'order' => 2],
            ['name' => 'TailwindCSS', 'category' => 'Frontend Development', 'proficiency_level' => 'advanced', 'order' => 3],
            ['name' => 'Bootstrap', 'category' => 'Frontend Development', 'proficiency_level' => 'advanced', 'order' => 4],
            ['name' => 'HTML5', 'category' => 'Frontend Development', 'proficiency_level' => 'expert', 'order' => 5],
            ['name' => 'CSS3', 'category' => 'Frontend Development', 'proficiency_level' => 'expert', 'order' => 6],
            ['name' => 'Responsive Design', 'category' => 'Frontend Development', 'proficiency_level' => 'advanced', 'order' => 7],

            // Backend Development
            ['name' => 'Laravel', 'category' => 'Backend Development', 'proficiency_level' => 'advanced', 'order' => 1],
            ['name' => 'Flask', 'category' => 'Backend Development', 'proficiency_level' => 'intermediate', 'order' => 2],
            ['name' => 'Node.js', 'category' => 'Backend Development', 'proficiency_level' => 'intermediate', 'order' => 3],
            ['name' => 'REST APIs', 'category' => 'Backend Development', 'proficiency_level' => 'advanced', 'order' => 4],
            ['name' => 'Microservices', 'category' => 'Backend Development', 'proficiency_level' => 'intermediate', 'order' => 5],

            // Database & Storage
            ['name' => 'SQLite', 'category' => 'Database & Storage', 'proficiency_level' => 'advanced', 'order' => 1],
            ['name' => 'DBMS', 'category' => 'Database & Storage', 'proficiency_level' => 'intermediate', 'order' => 2],
            ['name' => 'File Handling', 'category' => 'Database & Storage', 'proficiency_level' => 'advanced', 'order' => 3],

            // DevOps & Tools
            ['name' => 'Docker', 'category' => 'DevOps & Tools', 'proficiency_level' => 'intermediate', 'order' => 1],
            ['name' => 'Kubernetes', 'category' => 'DevOps & Tools', 'proficiency_level' => 'beginner', 'order' => 2],
            ['name' => 'Helm', 'category' => 'DevOps & Tools', 'proficiency_level' => 'beginner', 'order' => 3],
            ['name' => 'Linux', 'category' => 'DevOps & Tools', 'proficiency_level' => 'intermediate', 'order' => 4],
            ['name' => 'Git', 'category' => 'DevOps & Tools', 'proficiency_level' => 'advanced', 'order' => 5],
            ['name' => 'GitHub', 'category' => 'DevOps & Tools', 'proficiency_level' => 'advanced', 'order' => 6],

            // Specialized Areas
            ['name' => 'Networking', 'category' => 'Specialized Areas', 'proficiency_level' => 'intermediate', 'order' => 1],
            ['name' => 'Cryptography & Security', 'category' => 'Specialized Areas', 'proficiency_level' => 'intermediate', 'order' => 2],
            ['name' => 'Computer Graphics', 'category' => 'Specialized Areas', 'proficiency_level' => 'beginner', 'order' => 3],
            ['name' => 'Game Development', 'category' => 'Specialized Areas', 'proficiency_level' => 'intermediate', 'order' => 4],
            ['name' => 'Robot Framework', 'category' => 'Specialized Areas', 'proficiency_level' => 'beginner', 'order' => 5]
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        // Seed Certifications
        $certifications = [
            [
                'name' => 'Stipendium Hungaricum Scholarship (100%)',
                'issuer' => 'Hungarian Government',
                'issue_date' => '2023-09-01',
                'is_featured' => true,
                'order' => 1
            ],
            [
                'name' => 'React JS – Meta',
                'issuer' => 'Meta',
                'issue_date' => '2023-06-15',
                'is_featured' => true,
                'order' => 2
            ],
            [
                'name' => 'React Basics & Advanced',
                'issuer' => 'Meta',
                'issue_date' => '2023-07-20',
                'is_featured' => true,
                'order' => 3
            ],
            [
                'name' => 'Unsupervised Learning, Recommenders, Reinforcement Learning – Stanford Online',
                'issuer' => 'Stanford University',
                'issue_date' => '2023-05-10',
                'is_featured' => true,
                'order' => 4
            ],
            [
                'name' => 'Introduction to Containers w/ Docker, Kubernetes & OpenShift – IBM',
                'issuer' => 'IBM',
                'issue_date' => '2023-04-15',
                'is_featured' => true,
                'order' => 5
            ],
            [
                'name' => 'Java (Basic) – HackerRank',
                'issuer' => 'HackerRank',
                'issue_date' => '2023-03-20',
                'is_featured' => true,
                'order' => 6
            ],
            [
                'name' => 'REST API (Intermediate) – HackerRank',
                'issuer' => 'HackerRank',
                'issue_date' => '2023-02-15',
                'is_featured' => true,
                'order' => 7
            ],
            [
                'name' => 'SQL (Intermediate) – HackerRank',
                'issuer' => 'HackerRank',
                'issue_date' => '2023-01-20',
                'is_featured' => true,
                'order' => 8
            ],
            [
                'name' => 'C# (Basic) – HackerRank',
                'issuer' => 'HackerRank',
                'issue_date' => '2022-12-10',
                'is_featured' => true,
                'order' => 9
            ],
            [
                'name' => 'Crash Course on Python – Coursera',
                'issuer' => 'Coursera',
                'issue_date' => '2022-11-15',
                'is_featured' => true,
                'order' => 10
            ],
            [
                'name' => 'Introduction to Git and GitHub – Coursera',
                'issuer' => 'Coursera',
                'issue_date' => '2022-10-20',
                'is_featured' => true,
                'order' => 11
            ],
            [
                'name' => 'Web Design: Strategy and Information Architecture – Coursera',
                'issuer' => 'Coursera',
                'issue_date' => '2022-09-25',
                'is_featured' => true,
                'order' => 12
            ]
        ];

        foreach ($certifications as $certification) {
            Certification::create($certification);
        }
    }
} 