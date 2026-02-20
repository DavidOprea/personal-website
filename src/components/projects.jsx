import "./global.css";
import reclarifAIPic from "../../src/assets/reclarifAI.jpg";
import socialStockImage from "../../src/assets/stock.png";

function Projects() {
    return (
        <div id = "projects-container">
            <h2 class="header-text">Projects</h2>
            <div class="project-container">
                <div class="info">
                    <h4 class="project-header">ReclarifAI</h4>
                    <h5 class="description-text">ReclarifAI is a matching game for learning which changes the match definitions with AI, eliminating relying on pattern-recognition to beat the game.
    Other match games like Quizlet match eventually devolve into using pattern-recognition, such as memorizing the shape of the text instead of the actual meaning/information inside the text. This makes the learning become incredibly inefficient.
    We fix this by using ChatGPT to change the match text while keeping the core information. This removes pattern-recognition and forces users to learn the material thoroughly in order to beat the game as fast as possible.</h5>
                </div>
                <div class="project-image">
                    <a href="https://github.com/DavidOprea/ReclairifAI" target="_blank">
                        <button class="project-button">
                            Project's GitHub <i class="fa fa-github"></i>
                        </button>
                    </a>
                </div>
            </div>
            <div class="project-container">
                <div class="info">
                    <h4 class="project-header">Social Stock Exchange</h4>
                    <h5 class="description-text">A comprehensive real-time social trading platform built with Next.js that enables users to trade stocks with live market data while connecting with other traders. The platform features portfolio management, social interactions like friend systems and community stock suggestions, and real-time updates through WebSocket connections. It uses modern technologies including TypeScript, Tailwind CSS, and Supabase for the backend, providing a full-stack trading experience with both financial and social capabilities.</h5>
                </div>
                <div class="project-image">
                    <a href="https://github.com/monishmuralicharan/SocialStockExchange" target="_blank">
                        <button class="project-button">
                            Project's GitHub <i class="fa fa-github"></i>
                        </button>
                    </a>
                </div>
            </div>
            <div class="project-container">
                <div class="info">
                    <h4 class="project-header">SeisVis</h4>
                    <h5 class="description-text">A cross-platform desktop application for analyzing seismic data, built with Electron.js and Python. It enables waveform plotting, seismic station aggregation, and earthquake catalog visualization while featuring session caching to save application state. The application uses Anaconda for Python data processing and will be packaged with PyInstaller for universal compatibility across Windows, macOS, and Linux systems.</h5>
                </div>
                <div class="project-image">
                    <a href="https://github.com/Purdue-Stack/proj-seismic-data-visualization" target="_blank">
                        <button class="project-button">
                            Project's GitHub <i class="fa fa-github"></i>
                        </button>
                    </a>
                </div>
            </div>
            <div class="project-container">
                <div class="info">
                    <h4 class="project-header">Pokemon-VGC RL Agent</h4>
                    <h5 class="description-text">Developing a Reinforcement Learning agent for competitive Pokémon VGC using PyTorch. The agent utilizes a deep neural network policy to learn optimal decision-making directly from battle data, focusing on mastering team composition, dynamic move selection, and in-game prediction to achieve a high win rate against standard baseline models.</h5>
                </div>
                <div class="project-image">
                    <a href="https://github.com/akkshay0107/vgc-rl" target="_blank">
                        <button class="project-button">
                            Project's GitHub <i class="fa fa-github"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;