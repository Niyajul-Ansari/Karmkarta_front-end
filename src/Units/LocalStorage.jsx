const employee = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Complete Report",
                "description": "Finish the quarterly financial report.",
                "assignDate": "2025-02-15",
                "dueDate": "2025-02-20",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Team Meeting",
                "description": "Attend the project kickoff meeting.",
                "assignDate": "2025-02-10",
                "dueDate": "2025-02-10",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Code Review",
                "description": "Review the new feature implementation.",
                "assignDate": "2025-02-16",
                "dueDate": "2025-02-18",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Bug Fix",
                "description": "Resolve issues reported by QA.",
                "assignDate": "2025-02-12",
                "dueDate": "2025-02-14",
                "category": "Maintenance"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Create Documentation",
                "description": "Draft user manual for the new application.",
                "assignDate": "2025-02-17",
                "dueDate": "2025-02-22",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Client Feedback Analysis",
                "description": "Analyze feedback from recent client survey.",
                "assignDate": "2025-02-15",
                "dueDate": "2025-02-19",
                "category": "Analysis"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Social Media Campaign",
                "description": "Plan the next social media marketing strategy.",
                "assignDate": "2025-02-14",
                "dueDate": "2025-02-20",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Website Update",
                "description": "Update the website with new product details.",
                "assignDate": "2025-02-10",
                "dueDate": "2025-02-13",
                "category": "Development"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Inventory Check",
                "description": "Complete monthly inventory check.",
                "assignDate": "2025-02-16",
                "dueDate": "2025-02-19",
                "category": "Operations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Supplier Follow-up",
                "description": "Follow up with suppliers for pending orders.",
                "assignDate": "2025-02-11",
                "dueDate": "2025-02-13",
                "category": "Supply Chain"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]


export const setlocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getlocalStorage = () => {
    const employee=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    console.log(employee,admin);
    
}