

const footerLinks = {
    Product: ["Features","Pricing","Analytics","Dashboard"],
    Company: ["About", "Contact", "Privacy","Terms"],
    Connect: ["Twitter", "LinkedIn","GitHub"],
};
export default function Footer() {
    return (
        <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap');

        .footer-root{
            font-family: 'Sora', sans-serif;
            background-color: #f7f9fb;
            border-top: 1px solid #e8edf2;
            padding: 56px 64px 40px;
            color: #1a1f2e;
            }
            .footer-inner{
               max-width: 1200px;
               margin: 0 auto;
               display: grid;
               grid-template-columns: 1.6fr 1fr 1fr 1fr;
               gap: 40px;
               align-items: start;
            }
            .footer-brand-name {
                font-size: 17px;
                font-weight: 700;
                color: #0d1117;
                letter-spacing: -0.02em;
                margin: 0 0 10px;
                display: flex;
                align-items: center;
                gap: 7px;
            }
            .footer-brand-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #2563eb;
                display: inline-block;
                flex-shrink: 0;
            }
            .footer-tagline {
                font-size: 13px;
                color: #6b7280;
                line-height: 1.65;
                font-weight: 300;
                max-width: 220px;
            }
            .footer-col-title {
                font-size: 12px;
                font-weight: 600;
                color: #9ca3af;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                margin: 0 0 16px;
            }
            .footer-links {
                list style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .footer-links a{
                font-size: 13.5px;
                color: #374151;
                text-decoration: none;
                font-weight: 400;
                transition: color 0.18s ease, padding-left 0.18s ease;
                display: inline-block;
                }
            .footer-links a:hover {
                color: #2563eb;
                padding-left: 3px;
            }
            .footer-bottom {
                max-width: 1200px;
                margin: 40px auto 0;
                padding-top: 24px;
                border-top: 1px solid #e8edf2;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
            }
            .footer-copy {
                font-size: 12px;
                color: #9ca3af;
                font-weight: 300;
            }
            .footer-badge {
                font-size: 11px;
                color: #6b7280;
                background: #eef2f7;
                border-radius: 20px;
                padding: 4px 12px;
                font-weight: 500;
                letter-spacing: 0.02em;
                }
            @media (max-width: 900px){
                .footer-root { padding: 48px 40px 36px; }
                .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px 32px; }
                .footer-tagline { max-width: 100%; }
                }
            @media (max-width: 560px) {
                .footer-root { padding: 40px 20px 32px; }
                .footer-inner { grid-template-columns: 1fr; gap: 32px; }
                .footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; margin-top: 32px; }
            }
        `}</style>

        <footer className="footer-root">
            <div className="footer-inner">
                <div>
                    <p className="footer-brand-name">
                        <span className="footer-brand-dot"/>
                            IntroSync
                    </p>
                    <p className="footer-tagline">
                        Automating IndiaMART pipelines into intelligent CRM systems.
                    </p>
                </div>
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title}>
                        <p className="footer-col-title">{title}</p>
                         <ul className="footer-links">
                            {links.map((link) => (
                                <li key={link}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                         </ul>
                    </div>
                    ))}
            </div>

        <div className="footer-bottom">
            <span className="footer-copy">© {new Date().getFullYear()} IntroSync. All rights reserved.</span>
            <span className="footer-badge">IndiaMART . CRM Sync Platform</span>
        </div>
        </footer>
        </>
    );
}

