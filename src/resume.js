const resume = {
  name: "Andiboyina Mourya Chakradhar Nagesh",
  title: "Software Developer & Student",
  phoneNumber: "+(91) 9557658383",
  website: {
    url: "https://www.bobng.me/",
    label: "bobng.me",
  },
  email: {
    url: "mouryanagesh96@gmail.com",
    label: "mouryanagesh96@gmail",
  },
  linkedIn: {
    url: "https://www.linkedin.com/in/mourya-nagesh-a1627923a/",
    label: "linkedin.com/in/mourya-nagesh-a1627923a",
  },
  github: {
    url: "https://github.com/mourya96",
    label: "github.com/mouya96",
  },
  location: "Hyderabad, AP, India",
  about:
    "Skilled and diligent programmer with an eye for good designs. Always seeking to learn and improve on existing ways. A resourceful and avid self-learner passionate about coding.",

  skills: {
    languages: [
      "Python",
      "JavaScript",
      "SQL",
      "Bash",
      "R",
    ],
    ML_DL: [
      "Pytorch",
      "TensorFlow",
      "Keras",
      "Numpy",
      "Scikit-learn",
      "Pycaret",
      "Hugging Face",
    ],
    NLP: [
      "Spacy",
      "NLTK",
    ],
    data_analysis: [
      "Pandas",
      "Polars",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "ObservableHQ",
      "GGPlot",
    ],
    databases: ["PostgreSQL", "SQLite", "SQLAlchemy"],
    cloud_services: [
      "AWS (S3, EC2, Sagemaker)",
      "Google Cloud (Compute Engine, GCF)",
    ],
    web_frameworks: [
      "Vue.js",
      "Flask",
      "Socket.IO",
      "WebRTC",
      "Node.js",
      "Selenium",
    ],
  },

  education: [
    {
      school: "Indian Institute of Technology Madras, Chennai",
      cgpa: "8.35/10.0",
      description: "Bachelor of Science in Data Science and Applications",
      timeline: "2024",
    },
    {
      school: "Indian Institute of Technology Roorkee, Roorkee",
      cgpa: "5.40/10.0",
      description: "Bachelor of Technology in Electrical Engineering",
      timeline: "2021",
    },
    {
      school: "Sri Chaitanya Junior College",
      cgpa: "96.5%",
      description: "Intermediate (STDXII)",
      timeline: "2014",
    },
    {
      school: "Ravindra Bharathi School",
      cgpa: "95%",
      description: "High School (STDX)",
      timeline: "2012",
    },
  ],

  experiences: [
    {
      company: "GAVS Technologies",
      position: "Data Science Intern",
      timeline: "April 2023 - November 2023",
      location: "Chennai, TN",
      points: [
        "Developed a video transmission system using WebRTC and Socket.IO, and compared performance differences.",
        "Plotted motion skeleton coordinates using Mediapipe and saved them in formats such as Parquet and CSV.",
        "Built a preprocessing pipeline to convert data files into TFRecord format for use with a transformer model.",
        "Classified hand gestures in sign language using transformer models, improving recognition accuracy.",
      ],
    },
  ],

  projects: [
    {
      name: "Iris Recognition",
      type: "Academic Project",
      points: [
        "Developed an iris recognition system using the Daughman Algorithm in MATLAB.",
        "Masked iris segments and compared them with a database using Hamming Distance for accurate identification.",
      ],
      timeline: "Jan 2018 - Apr 2018",
    },
    {
      name: "Urban Sound Classification",
      type: "Academic Project",
      points: [
        "Visualized audio signals using spectrograms for pattern analysis and classification of noise signals.",
        "Used CNN with spectrogram data to classify various noise signals.",
      ],
      timeline: "Aug 2018 - Dec 2018",
    },
    {
      name: "Speech Separation using CVAE",
      type: "ICAIA 2019 Conference Project",
      points: [
        "Developed a model to separate speech from noisy signals using Conditional Variational Autoencoders (CVAE).",
        "Analyzed audio patterns and trained the model to improve speech intelligibility.",
        "Measured the difference between the recovered and original speech signals using the Speech Intelligibility Index.",
      ],
      timeline: "Jan 2019 - Aug 2019",
    },
    {
      name: "Student Support Ticketing System",
      type: "Course Project",
      points: [
        "Developed a web app using Flask for backend and Vue.js for frontend to manage student support tickets.",
        "Followed agile methodology with tools like Kanban and Jira for project management.",
      ],
      timeline: "Feb 2023 - Apr 2023",
    },
    {
      name: "Data Visualization Design",
      type: "Course Project",
      points: [
        "Performed data analysis and visualization of student data to identify socio-economic patterns and preferences.",
        "Created a visual story from the analysis to infer insights from the gathered data.",
      ],
      timeline: "June 2023 - Aug 2023",
    },
  ],

  interests: ["Badminton", "PC Building"],
  languages: ["English", "Hindi", "Telugu"],
  lastUpdated: "June 2024",
};

export default resume;
