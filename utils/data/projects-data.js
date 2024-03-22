import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Database Design and ETL Process for Water Data', 
        description: "I have designed and developed a database for water data using Aurora Postgres instance. I have created a data pipeline to extract, transform, and load data from multiple sources leveraging NWIS's REST API and dataretrieval framework. I have used Python, Pandas, SQLAlchemy, and AWS Lambda and Apache Airflow to automate the ETL process. I have also created a CI/CD pipeline using GitHub Actions to automate the deployment process. I have built a dashboard using PowerBI to visualize the data.",
        tools: ['Python', 'Pandas', 'SQLAlchemy', 'AWS Lambda', 'Apache Airflow', 'PowerBI', 'GitHub Actions', 'NWIS REST API', 'Dataretrieval'],
        role: 'Data Engineer & Database Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AWS ETL Pipeline for YouTube Video Analytics',
        description: 'I have developed a cloud-based data ecosystem for YouTube video analytics using AWS services. I have created a data pipeline to extract, transform, and load data from YouTube API to S3 bucket using AWS Lambda and S3. I have used AWS Glue to transform the data and store it in AWS Redshift. I have built a dashboard using Tableau to visualize the data.',
        tools: ['AWS Lambda', 'AWS S3', 'AWS Glue', 'AWS Redshift', 'Tableau', 'YouTube API', 'Python', 'SQL', 'Pandas'],
        role: 'Data Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Database Design for University Library System',
        description: 'I have designed a database for a university library system using Oracle SQL services. I have created an ER diagram encompassing 40-entities complex conceptual data model, normalized the database, and created tables with appropriate constraints. I have written SQL queries to retrieve data from the database. I have also created a stored procedure to automate the process of borrowing and returning books. Project is estimated to achieve cost savings of $10,000 annually bringing data services in-house.',
        tools: ['Oracle SQL', 'ER Diagram', 'Normalization', 'Stored Procedure', 'SQL Queries'],
        code: '',
        role: 'Database Architect & Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Analysis of Accident Data and Visualization',
        description: "I have analyzed the accident data of the United States from 2016 to 2020. I have used Python, Pandas, and SQL to clean and preprocess the data. I have used PowerBI to visualie the data. I have created a dashboard to visualize the data and identify the trends and patterns in the data. Analysis of data was used to identify the factors contributing to accidents and developed a product centric strategy to reduce the number of accidents. I have also designed a prototype of a mobile application using Figma to report accidents in real-time.",
        tools: ['Python', 'Pandas', 'SQL', 'PowerBI', 'Figma'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Data Analyst & Visualization Expert',
    }
];


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
//     image: crefin,
// },