---
title: Database Structure
section: Database and Data Management
page: 1
published: true
---

# Database Structure

Mercury CMS uses a relational database to store and manage content, user data, and media files. This section provides an overview of the database tables and their relationships.

## Tables Overview

1. **authors**: Stores information about content creators.
2. **media**: Manages uploaded files and their metadata.
3. **posts**: Contains the main content entries.
4. **tags**: Stores categories or keywords for content organization.
5. **post_tags**: A junction table linking posts to tags.
6. **users**: Manages user accounts for CMS access.

## Table Structures

### authors
- `id`: Unique identifier (Primary Key)
- `name`: Author's full name
- `slug`: URL-friendly version of the name
- `email`: Author's email address
- `bio`: Brief author biography
- `profile_picture`: Reference to the author's profile image
- `created_at`: Timestamp of record creation

### media
- `id`: Unique identifier (Primary Key)
- `file_name`: Original name of the uploaded file
- `file_type`: MIME type of the file
- `file_size`: Size of the file in bytes
- `file_path`: Location of the file in the system
- `created_at`: Timestamp of file upload
- `updated_at`: Timestamp of last modification

### posts
- `id`: Unique identifier (Primary Key)
- `title`: Title of the post
- `slug`: URL-friendly version of the title
- `excerpt`: Brief summary of the post
- `content`: Full content of the post
- `author_id`: Foreign key referencing the `authors` table
- `feature_image`: Reference to the post's main image
- `status`: Current state of the post (e.g., 'draft', 'published')
- `published_at`: Timestamp of when the post was made public
- `created_at`: Timestamp of post creation
- `updated_at`: Timestamp of last modification

### tags
- `id`: Unique identifier (Primary Key)
- `name`: Name of the tag
- `slug`: URL-friendly version of the tag name

### post_tags
- `post_id`: Foreign key referencing the `posts` table
- `tag_id`: Foreign key referencing the `tags` table

### users
- `id`: Unique identifier (Primary Key)
- `username`: User's login name
- `email`: User's email address
- `password_hash`: Securely stored password
- `api_key`: Unique key for API authentication
- `created_at`: Timestamp of account creation

## Relationships

- Each `post` is associated with one `author` through the `author_id` foreign key.
- `posts` and `tags` have a many-to-many relationship, facilitated by the `post_tags` junction table.
- `media` items can be referenced by `posts` (feature_image) and `authors` (profile_picture).
- `users` are separate from `authors`, allowing for administrative accounts that may not create content.

## Data Types

- Text fields (`text`): Used for storing strings of various lengths.
- Timestamps: Used for storing date and time information.
- Integers: Used for storing numerical data like file sizes.

## Notes on Implementation

- The use of `text` for ID fields suggests a UUID or similar string-based unique identifier system, which can be beneficial for distributed systems or data migration.
- The `status` field in the `posts` table allows for a workflow where posts can be in different states (e.g., draft, published, archived).
- The `api_key` in the `users` table facilitates API access, allowing for headless CMS functionality.

This database structure provides a solid foundation for a content management system, allowing for efficient storage and retrieval of posts, media, and user data. It's designed to be flexible, supporting features like tagging, author management, and user authentication.
