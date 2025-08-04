<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Get portfolio overview data
     */
    public function overview(): JsonResponse
    {
        $data = [
            'personal_info' => [
                'name' => 'Muhammad Eman Aftab',
                'title' => 'Computer Science Student & Full-Stack Developer',
                'location' => 'Budapest, Hungary',
                'email' => 'emanaftab2022@gmail.com',
                'phone' => '+36 20 252 6795',
                'github' => 'https://github.com/muhammademanaftab',
                'linkedin' => 'https://linkedin.com/in/muhammademanaftab',
                'about' => [
                    'I\'m a passionate Computer Science student at Eötvös Loránd University (ELTE) in Budapest, Hungary, with a strong foundation in full-stack development and software engineering. Currently pursuing my Bachelor\'s degree, I combine academic excellence with practical experience in modern web technologies.',
                    'As a Student Mentor at HÖOK, I help international students navigate their academic journey while continuously expanding my technical expertise through diverse projects ranging from web applications to system simulations.'
                ]
            ],
            'quick_facts' => [
                'education' => 'CS @ ELTE',
                'experience' => 'Student Mentor',
                'projects' => '8+ Completed',
                'certifications' => '12+ Earned'
            ]
        ];

        return response()->json($data);
    }

    /**
     * Get education data
     */
    public function education(): JsonResponse
    {
        $data = [
            'education' => [
                'degree' => 'Bachelor\'s in Computer Science',
                'institution' => 'Eötvös Loránd University (ELTE), Hungary',
                'period' => 'Sep 2023 – Jul 2026',
                'scholarship' => 'Stipendium Hungaricum Scholarship (100%)',
                'coursework' => [
                    'Data Structures',
                    'Algorithms', 
                    'Object-Oriented Programming',
                    'Software Development Methodologies',
                    'Computer Networks'
                ]
            ]
        ];

        return response()->json($data);
    }

    /**
     * Get experience data
     */
    public function experience(): JsonResponse
    {
        $data = [
            'experience' => [
                'title' => 'Student Mentor',
                'company' => 'HÖOK, Budapest, Hungary',
                'period' => 'Jul 2024 – Present',
                'responsibilities' => [
                    'Guided international students in academic success and cultural integration throughout their studies in Hungary',
                    'Assisted with course selection, administrative processes, and adapting to student life abroad',
                    'Fostered a supportive and enriching environment to help students achieve both academic and personal goals'
                ]
            ]
        ];

        return response()->json($data);
    }

    /**
     * Get projects data
     */
    public function projects(): JsonResponse
    {
        $data = [
            'projects' => [
                [
                    'id' => 1,
                    'title' => 'Pet Catalogue - React & Laravel Web App',
                    'description' => 'Full-stack web application for cataloguing and managing pets with CRUD capabilities, birth/death tracking, and dynamic statistics.',
                    'tech' => ['React', 'Laravel', 'TailwindCSS', 'SQLite', 'Laravel Blade'],
                    'features' => ['Full CRUD Operations', 'Dynamic Statistics', 'Clean UI/UX'],
                    'icon' => 'code',
                    'icon_color' => 'blue'
                ],
                [
                    'id' => 2,
                    'title' => 'Laravel LMS - Learning Management System',
                    'description' => 'Comprehensive learning platform with role-based dashboards for teachers and students, featuring task management and secure authentication.',
                    'tech' => ['Laravel 12', 'SQLite', 'TailwindCSS', 'PHP', 'Laravel Breeze'],
                    'features' => ['Role-based Dashboards', 'Task Assignment', 'Secure Authentication'],
                    'icon' => 'users',
                    'icon_color' => 'green'
                ],
                [
                    'id' => 3,
                    'title' => 'Task Manager Pro',
                    'description' => 'Flask-based productivity application with priority filtering, due date tracking, and real-time reminders.',
                    'tech' => ['Flask', 'Python', 'SQLite', 'Bootstrap', 'HTML/CSS'],
                    'features' => ['Priority Filtering', 'Due Date Tracking', 'Real-time Reminders'],
                    'icon' => 'zap',
                    'icon_color' => 'yellow'
                ],
                [
                    'id' => 4,
                    'title' => 'Atmospheric Layer Simulation',
                    'description' => 'Advanced OOP simulation of atmospheric layer interactions using design patterns for modularity and scalability.',
                    'tech' => ['C#', 'OOP', 'Design Patterns', 'Unit Testing'],
                    'features' => ['Visitor Pattern', 'Singleton Pattern', 'Modular Design'],
                    'icon' => 'trending-up',
                    'icon_color' => 'purple'
                ],
                [
                    'id' => 5,
                    'title' => 'Java Board Game Simulation',
                    'description' => 'Custom board game with dynamic movement logic, comprehensive player management, and extensive unit testing.',
                    'tech' => ['Java', 'Swing', 'JUnit 5'],
                    'features' => ['Dynamic Movement', 'Score Management', 'Unit Tested'],
                    'icon' => 'star',
                    'icon_color' => 'orange'
                ],
                [
                    'id' => 6,
                    'title' => 'Vlera AI - Static Website',
                    'description' => 'Responsive informational website showcasing AI assistant applications and impact.',
                    'tech' => ['HTML5', 'CSS', 'Bootstrap'],
                    'features' => ['Responsive Design', 'Modern UI', 'AI Focus'],
                    'icon' => 'cpu',
                    'icon_color' => 'cyan'
                ]
            ]
        ];

        return response()->json($data);
    }

    /**
     * Get skills data
     */
    public function skills(): JsonResponse
    {
        $data = [
            'skills' => [
                'Programming Languages' => ['Java', 'Python', 'C', 'C#', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS', 'PHP', 'Clean', 'Haskell'],
                'Frontend Development' => ['React', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'HTML5', 'CSS3', 'Responsive Design'],
                'Backend Development' => ['Laravel', 'Flask', 'Node.js', 'PHP', 'REST APIs', 'Microservices'],
                'Database & Storage' => ['SQLite', 'SQL', 'DBMS', 'File Handling'],
                'DevOps & Tools' => ['Docker', 'Kubernetes', 'Helm', 'Linux', 'Git', 'GitHub'],
                'Specialized Areas' => ['Networking', 'Cryptography & Security', 'Computer Graphics', 'Game Development', 'Robot Framework']
            ]
        ];

        return response()->json($data);
    }

    /**
     * Get certifications data
     */
    public function certifications(): JsonResponse
    {
        $data = [
            'certifications' => [
                'Stipendium Hungaricum Scholarship (100%)',
                'React JS – Meta',
                'React Basics & Advanced',
                'Unsupervised Learning, Recommenders, Reinforcement Learning – Stanford Online',
                'Introduction to Containers w/ Docker, Kubernetes & OpenShift – IBM',
                'Java (Basic) – HackerRank',
                'REST API (Intermediate) – HackerRank',
                'SQL (Intermediate) – HackerRank',
                'C# (Basic) – HackerRank',
                'Crash Course on Python – Coursera',
                'Introduction to Git and GitHub – Coursera',
                'Web Design: Strategy and Information Architecture – Coursera'
            ]
        ];

        return response()->json($data);
    }

    /**
     * Get contact data
     */
    public function contact(): JsonResponse
    {
        $data = [
            'contact' => [
                'email' => [
                    'address' => 'emanaftab2022@gmail.com',
                    'icon' => 'mail',
                    'color' => 'purple',
                    'label' => 'Email Me'
                ],
                'phone' => [
                    'number' => '+36202526795',
                    'icon' => 'phone',
                    'color' => 'green',
                    'label' => 'Call Me'
                ],
                'github' => [
                    'username' => 'muhammademanaftab',
                    'url' => 'https://github.com/muhammademanaftab',
                    'icon' => 'github',
                    'color' => 'gray',
                    'label' => 'GitHub'
                ],
                'linkedin' => [
                    'username' => 'muhammademanaftab',
                    'url' => 'https://linkedin.com/in/muhammademanaftab',
                    'icon' => 'linkedin',
                    'color' => 'blue',
                    'label' => 'LinkedIn'
                ]
            ]
        ];

        return response()->json($data);
    }
} 