<<<<<<< HEAD
# Student Portfolio & Activity Management Platform - Frontend

This repository contains the React frontend for the CoCred platform—a secure web application for students to submit extra/co-curricular activities (hackathons, sports, volunteering, etc.), track approvals, and generate shareable portfolios. Faculty validate submissions, and admins access analytics for accreditation (NAAC/NIRF).

## Tech Stack
- **Framework:** React (with Hooks and Context API for state management)
- **Styling:** Tailwind CSS for responsive design
- **HTTP Client:** Axios for API calls to Spring Boot backend
- **Routing:** React Router for protected routes and navigation
- **Other:** Chart.js for analytics dashboards (future)

## Key Features (Frontend)
### Student Panel
- Registration/Login with college email validation
- Activity upload forms (certificates, descriptions)
- Submission status dashboard (pending/approved/rejected)
- Portfolio builder with template selection and customization checklist
- Sharing options: Links, QR codes, PDF downloads

### Faculty Panel
- Review and approve/reject student submissions
- Search/filter by student, department, activity type

### Admin Panel
- Analytics dashboards with charts (department-wise performance, top students)
- Report exports (CSV/PDF for accreditation)

## Local Setup
1. Clone the repo: `git clone https://github.com/Karthi-dev123/portfolio-frontend.git`
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open http://localhost:3000 in your browser

## Backend Integration
- Connects to Spring Boot backend at `http://localhost:8080`
- Uses JWT tokens for authentication

## Project Phases
- Phase 1: Authentication (Login/Register)
- Phase 2: Student Activity Submission
- Phase 3: Faculty Review Workflow
- Phase 4: Portfolio Generation & Sharing
- Phase 5: Admin Analytics & Reports

For backend code, see the [portfolio-backend repository](https://github.com/Karthi-dev123/portfolio-backend).

## Contributing
- Fork the repo
- Create a feature branch (`git checkout -b feature/AmazingFeature`)
- Commit changes (`git commit -m 'Add some AmazingFeature'`)
- Push to branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## License
MIT License

---
Built with ❤️ for SRM University college project.

>>>>>>> a7ec04b097f517a649f0d155a1f5476ea686430e
