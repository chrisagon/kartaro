import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const observerRefs = useRef<Array<HTMLElement | null>>([]);

    useEffect(() => {
        if (currentUser) {
            navigate('/app', { replace: true });
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        // Smooth scroll pour les liens d'ancrage
        const smoothScrollHandler = (e: MouseEvent) => {
            e.preventDefault();
            const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
            const target = targetId ? document.querySelector(targetId) : null;
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };

        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', smoothScrollHandler as EventListener);
        });

        // Animation au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.problem-card, .persona-card, .feature');
        elementsToAnimate.forEach(el => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = '0';
            htmlEl.style.transform = 'translateY(20px)';
            htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(htmlEl);
            // Keep a ref to disconnect later
            observerRefs.current.push(htmlEl);
        });

        // Cleanup function
        return () => {
            anchorLinks.forEach(anchor => {
                anchor.removeEventListener('click', smoothScrollHandler as EventListener);
            });
            observerRefs.current.forEach(el => {
                if (el) {
                    observer.unobserve(el);
                }
            });
        };
    }, []);

    return (
        <>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div>
                            <h1>Transformez vos <span className="accent">ateliers</span> en expériences mémorables</h1>
                            <p>Des jeux de cartes interactifs pour stimuler la créativité, renforcer la collaboration et dynamiser vos animations.</p>
                            <div className="hero-actions">
                                <a href="#contact" className="cta-button">Découvrir Kartaro</a>
                                <a href="#solution" className="cta-button secondary">Comment ça marche ?</a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="hero-visual">
                                🎴<br />Jeux de cartes<br />intelligents
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section id="mission" className="problem">
                <div className="container">
                    <h2 className="section-title">Notre mission</h2>
                    <p className="section-subtitle">Permettre des animations plus créatives et interactives en offrant des outils uniques qui stimulent la réflexion et la collaboration.</p>

                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="problem-icon">😴</div>
                            <h3>Manque d'engagement</h3>
                            <p>Les participants peinent à s'investir, restent passifs et n'osent pas prendre la parole.</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">⏱️</div>
                            <h3>Préparation complexe</h3>
                            <p>Concevoir et animer un atelier efficace demande beaucoup de temps et d'énergie.</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">💡</div>
                            <h3>Résultats limités</h3>
                            <p>Les idées restent superficielles et l'apprentissage n'est pas durablement ancré.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section id="solution" className="solution">
                <div className="container">
                    <h2 className="section-title">La solution Kartaro</h2>
                    <p className="section-subtitle">Une gamme de jeux de cartes clés en main pour animer vos sessions avec impact.</p>

                    <div className="solution-content">
                        <div className="solution-features">
                            <div className="feature">
                                <div className="feature-icon">⚡</div>
                                <div className="feature-content">
                                    <h4>Prise en main rapide</h4>
                                    <p>Guides d'animation complets pour démarrer immédiatement, sans formation préalable.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🎯</div>
                                <div className="feature-content">
                                    <h4>Thématiques variées</h4>
                                    <p>Design thinking, créativité, cohésion d'équipe, pédagogie active... adaptés à tous contextes.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🤝</div>
                                <div className="feature-content">
                                    <h4>Engagement garanti</h4>
                                    <p>Méthodologies éprouvées pour lever les freins et faire participer tous les profils.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">📊</div>
                                <div className="feature-content">
                                    <h4>Résultats tangibles</h4>
                                    <p>Productions concrètes et partageables dès la fin de chaque session.</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🔄</div>
                                <div className="feature-content">
                                    <h4>Modulable et évolutif</h4>
                                    <p>Personnalisez vos jeux selon vos besoins et enrichissez votre bibliothèque au fil du temps.</p>
                                </div>
                            </div>
                        </div>
                        <div className="solution-visual">
                            <div>
                                <strong>Kartaro =</strong><br /><br />
                                Kart (carte) + Ado (action/processus)<br /><br />
                                Le processus de création<br />par les cartes
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personas */}
            <section id="personas" className="personas">
                <div className="container">
                    <h2 className="section-title">Kartaro s'adresse à vous</h2>
                    <p className="section-subtitle">Que vous soyez facilitateur, enseignant ou formateur, Kartaro s'adapte à votre pratique.</p>

                    <div className="personas-grid">
                        <div className="persona-card">
                            <div className="persona-avatar">🎯</div>
                            <h3>Facilitateurs</h3>
                            <p>Vous animez des ateliers de design thinking, de créativité ou de cohésion d'équipe.</p>
                            <ul className="persona-benefits">
                                <li>Structurez vos sessions efficacement</li>
                                <li>Engagez tous les profils de participants</li>
                                <li>Stimulez la spontanéité et l'innovation</li>
                                <li>Gardez le contrôle tout en libérant la créativité</li>
                            </ul>
                        </div>
                        <div className="persona-card">
                            <div className="persona-avatar">📚</div>
                            <h3>Enseignants</h3>
                            <p>Vous enseignez et cherchez à rendre vos cours plus vivants et participatifs.</p>
                            <ul className="persona-benefits">
                                <li>Captez l'attention de toute la classe</li>
                                <li>Favorisez l'apprentissage actif</li>
                                <li>Rendez les concepts abstraits concrets</li>
                                <li>Créez des moments mémorables</li>
                            </ul>
                        </div>
                        <div className="persona-card">
                            <div className="persona-avatar">🚀</div>
                            <h3>Formateurs</h3>
                            <p>Vous formez des adultes en entreprise ou en centre de formation.</p>
                            <ul className="persona-benefits">
                                <li>Boostez l'engagement de vos stagiaires</li>
                                <li>Ancrez l'apprentissage dans l'action</li>
                                <li>Intégrez la gamification facilement</li>
                                <li>Obtenez des feedbacks instantanés</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="final-cta">
                <div className="container">
                    <h2>Prêt à révolutionner vos ateliers ?</h2>
                    <p>Rejoignez les facilitateurs, enseignants et formateurs qui utilisent déjà Kartaro</p>
                    <a href="mailto:contact@kartaro.com" className="cta-button">Demander une démo</a>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container">
                    <p>&copy; 2025 Kartaro - Des ateliers créatifs qui stimulent la réflexion et favorisent la collaboration</p>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
