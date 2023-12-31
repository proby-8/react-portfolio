import React from "react";

import "./actualprojects.css";

const ActualProjects = () => {
    return (
        <div>
            <div className="grid-display-board">
                <a
                    href="https://github.com/proby-8/tims-picker"
                    target="_blank"
                >
                    <div className="project">
                        <div className="project-title">
                            Tim Horton's Hockey Challenge Picker
                        </div>
                        <div className="project-description">
                            This program includes a variety of functions that
                            together provide a way to reliably pick winning
                            hockey challenge picks for Tim Hortons Hockey Pick
                            Challenge using machine learning.
                        </div>
                        <div className="project-languages">
                            <div className="logo python">
                                <div className="text">Python</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                            </div>
                            <div className="logo tensorflow">
                                <div className="text">TensorFlow</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
                            </div>
                            <div className="logo pandas">
                                <div className="text">pandas</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" />
                            </div>
                            <div className="logo numpy">
                                <div className="text">NumPy</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://www.nathanprobert.ca">
                    <div className="project">
                        <div className="project-title">Portfolio Website</div>
                        <div className="project-description">
                            A website designed to showcase my front-end web
                            development, and provide more in-depth information
                            to my experience, education, and knowledge than my
                            resume can provide.
                        </div>
                        <div className="project-languages">
                            <div className="logo react">
                                <div className="text">React</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            </div>
                            <div className="logo html5">
                                <div className="text">HTML</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            </div>
                            <div className="logo css3">
                                <div className="text">CSS</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            </div>
                            <div className="logo javascript">
                                <div className="text">JavaScript</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://www.nathanprobert.ca/wordle">
                    <div className="project">
                        <div className="project-title">Wordle Game</div>
                        <div className="project-description">
                            A Wordle replica that demonstrates my ability to
                            design visually appealing interfaces, implement
                            complex game logic, and utilize JavaScript for user
                            interaction.
                        </div>
                        <div className="project-languages">
                            <div className="logo html5">
                                <div className="text">HTML</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            </div>
                            <div className="logo css3">
                                <div className="text">CSS</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            </div>
                            <div className="logo javascript">
                                <div className="text">JavaScript</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://github.com/proby-8/wordle-solver"
                    target="_blank"
                >
                    <div className="project">
                        <div className="project-title">Wordle Solving Bot</div>
                        <div className="project-description">
                            This program guesses the Wordle word of the day by
                            counting the appearance of each character and its
                            position in every word, then uses this data so that
                            its guess eliminates as many alternate words as
                            possible.
                        </div>
                        <div className="project-languages">
                            <div className="logo python">
                                <div className="text">Java</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://github.com/proby-8/discord-music-bot"
                    target="_blank"
                >
                    <div className="project">
                        <div className="project-title">
                            Multipurpose Discord Music Bot
                        </div>
                        <div className="project-description">
                            Program's main function is to play music in a
                            discord voice channel (based off song name, lyrics,
                            or any identifiying factor), import Spotify
                            playlists, play tic tac toe, and much more.
                        </div>
                        <div className="project-languages">
                            <div className="logo python">
                                <div className="text">Python</div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ActualProjects;
