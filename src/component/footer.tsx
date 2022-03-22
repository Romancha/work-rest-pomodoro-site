import React from "react";
import {Col, Row} from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="page-footer font-small blue pt-3 bg-light">

            <div className={"container g-4 py-3"}>
                <Row>
                    <Col>
                        <div className={"text-center py-3"}>
                            <div className={"h6"}>
                                Work & Rest
                            </div>
                            <div className={"text-muted"}>
                                Work smart. Have rest in time.
                            </div>
                            <div className="footer-copyright pt-2">
                                © {new Date().getFullYear()}, {' '}
                                <a href="https://romancha.org" target="_blank" rel="noopener noreferrer">
                                    Romancha</a>.
                                All rights reserved.
                            </div>
                        </div>
                    </Col>

                    <Col>

                    </Col>

                    <Col>
                        <h5>Product</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/faq"
                                                             className="nav-link p-0 text-muted">FAQs</a>
                            </li>
                            <li className="nav-item mb-2"><a href="/release"
                                                             className="nav-link p-0 text-muted">Release Notes</a>
                            </li>
                            <li className="nav-item mb-2"><a href="/guide"
                                                             className="nav-link p-0 text-muted">
                                Full Reference Guide
                            </a>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h5>Connect</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="mailto:wr@romancha.org"
                                                             className="nav-link p-0 text-muted">Submit an Idea</a></li>
                            <li className="nav-item mb-2"><a href="mailto:wr@romancha.org"
                                                             className="nav-link p-0 text-muted">Report a Bug</a></li>
                            <li className="nav-item mb-2"><a href="mailto:wr@romancha.org"
                                                             className="nav-link p-0 text-muted">Email</a></li>
                            <li className="nav-item mb-2"><a href={"https://crowdin.com/project/work-rest"}
                                                             target={"_blank"} className="nav-link p-0 text-muted">
                                Help Translation</a>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h5>Developer</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a>
                            </li>
                            <li className="nav-item mb-2"><a href="/app-privacy-policy"
                                                             className="nav-link p-0 text-muted">
                                Privacy Policy
                            </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

            </div>
        </footer>
    );
}