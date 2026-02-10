# TechElevate Database Schema

This document outlines the initial database structure for the TechElevate platform. We will use a NoSQL database like MongoDB, which is flexible and works well with our chosen tech stack.

---

### 1. **Users Collection**

This collection will store all the information related to our users (the learners).

- **`username`** (String): A unique name for the user to identify themselves. This is required.
- **`email`** (String): The user's email address, used for login and communication. It must be unique and is required.
- **`password`** (String): The user's password, which will be securely hashed before being stored. This is required.
- **`fullName`** (String): The real name of the user.
- **`enrolledCourses`** (Array of Course IDs): A list that holds the unique IDs of all the courses a user has enrolled in. This links a user to the courses they are taking.
- **`progress`** (Object): An object to track the user's progress in their courses. For example: `{ "courseId1": 80, "courseId2": 45 }` indicating 80% completion for the first course.
- **`createdAt`** (Date): The date and time the user account was created.

---

### 2. **Courses Collection**

This collection will store all the details about the educational courses we offer.

- **`title`** (String): The name of the course (e.g., "Introduction to Web Development"). This is required.
- **`description`** (String): A detailed summary of the course content and what students will learn. This is required.
- **`instructor`** (String): The name of the person teaching the course.
- **`level`** (String): The difficulty of the course, such as "Beginner", "Intermediate", or "Advanced".
- **`modules`** (Array of Objects): The course content, broken down into modules. Each module can have lessons.
  - `title` (String): The title of a module (e.g., "Module 1: HTML Basics").
  - `lessons` (Array of Objects): The lessons within each module.
    - `title` (String): The title of a lesson (e.g., "Your First Web Page").
    - `content` (String): The actual lesson material (can be text, a link to a video, or markdown).
    - `duration` (Number): Estimated time in minutes to complete the lesson.
- **`createdAt`** (Date): The date and time the course was created.
