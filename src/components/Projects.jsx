export function  Projects(){
    const projects =  [
        {
            title: "Word count CLI",
            description:  "A Command line tool written in python to count lines, words, characters and bytes. This project is inspired by codingchallenges.fyi",
            githubLink: "https://github.com/mranish592/wc-cli",
        },
        {
            title: "Todo web app",
            description:  "A Todo web app utilising MongoDB, Express.js, React.js and zod library to support JWT-based login and persistent storage of tasks.",
            githubLink: "https://github.com/mranish592/todo-list-web-app",
        },
        {
            title: "Jobfair",
            description:  "Django based freelancing portal with sign-up, login, create jobs and ratings functionality.",
            githubLink: "https://github.com/mranish592/JOBFAIR",
        },
        {
            title: "Snake game web app",
            description:  "A web based snake game written in typescript.",
            githubLink: "https://github.com/mranish592/snake-game-typescript",
        },
        {
            title: "Sudoku game web app",
            description:  "A web based sudoku game written in javascript.",
            githubLink: "https://github.com/mranish592/sudoku-javascript",
        },
        {
            title: "Invoice genrator",
            description:  "A python based pdf invoice generator from excel files.",
            githubLink: "https://github.com/mranish592/ORION_CORP_INVOICE_GENERATOR",
        },
    ]
    return <>
        {/* <div class="container"> */}
            <h3>Projects</h3>
            <div class="cards">
                {projects.map((project, index) => (
                    <div key={index} class="card">
                        <h3>{project.title}</h3>
                        <div>{project.description}</div>
                        <br />
                        <span class="project-link">
                            {project.githubLink && <a href={project.githubLink} target="_blank">Github</a>}
                            {project.projectLink && <a href={project.projectLink} target="_blank">Demo</a>}
                        </span>
                    </div>
                ))}
            </div>
        {/* </div> */}
        
    </>
}