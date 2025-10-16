export const projectsData = [
    {
        id: 1,
        name: 'JanNivaaran - Civic Issue Reporting System',
        description: "Me and my team built a website for civic issue reporting and resolution for the SIH problem statement of Jharkhand government. We created an interactive dashboard that allows citizens to report issues with just a few clicks. The system automatically fetches the user's location and supports voice notes. Issues pass through a spam filter model that assigns departments, sets priorities, and filters invalid reports (e.g., mismatched photo/description or non-civic issues). Admins can mark issues as resolved by adding proof, and citizens can track the status from pending → under consideration → resolved. If unsatisfied, the issue can be escalated to a higher authority (super admin), ensuring both reporting and resolution.",
        tools: ['React', 'MongoDB', 'Express', 'BLIP Model', 'Swin Model', 'YOLO Model', 'Python', 'Sentence Transformer'],
        role: 'Team Member',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'OceanLens - Marine Debris Detection System',
        description: "Built an AI-powered real-time marine debris detection system using YOLOv8n to identify and classify 5 types of ocean debris (cans, foam, plastic, plastic bottles, and unknown objects). The model achieves 94.9% mAP@50 and 94.7% precision, trained on 720 images with 7,762 object instances. Developed a user-friendly web interface using Gradio that processes both images and videos, providing instant detection results with detailed statistics and annotated visualizations. The system runs at ~143 FPS, making it suitable for real-time applications in beach cleanup monitoring, underwater debris detection, and environmental research. Deployed on Hugging Face Spaces for free public access.",
        tools: ['YOLOv8', 'Python', 'Gradio', 'OpenCV', 'PyTorch', 'Google Colab', 'Hugging Face'],
        role: 'Developer',
        code: '',
        demo: 'https://huggingface.co/spaces/23Aditi/OceanLens',
    },
    {
        id: 3,
        name: 'File Organizer Script',
        description: "A solo project to automate file organization in any specified directory. The script scans the folder, detects file types based on extensions, creates folders for categories (images, docs, code, etc.), and moves files into respective folders while leaving already-organized folders untouched. It keeps your workspace tidy and saves time.",
        tools: ['Node.js', 'JavaScript', 'npm'],
        role: 'Solo Project',
        code: 'https://github.com/23Aditi/file-organizer-script',
        demo: '',
    }
];
    

    //,
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     role: 'Full Stack Developer',
    // }



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },