// footer.js – Footer universel Oldy & Sébastien
// Ajouter juste avant </body> dans chaque page : <script src="footer.js"></script>

(function () {
  const footer = document.createElement('footer');
  footer.id = 'footer-universel';
  footer.innerHTML = `
    <style>
      #footer-universel {
        background: #111c33;
        text-align: center;
        padding: 24px 16px;
        font-family: Arial, sans-serif;
        font-size: 0.82rem;
        color: #a0b0c8;
        border-top: 2px solid #2d6a4f;
        margin-top: 40px;
      }
      #footer-universel .footer-titre {
        color: #ffffff;
        font-weight: bold;
        font-size: 0.95rem;
        margin-bottom: 6px;
      }
      #footer-universel .footer-auteur {
        margin-bottom: 6px;
      }
      #footer-universel .footer-contact a {
        color: #c9973a;
        text-decoration: none;
      }
      #footer-universel .footer-contact a:hover {
        text-decoration: underline;
      }
      #footer-universel .footer-legal {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255,255,255,0.08);
        font-size: 0.78rem;
        color: #6a7f9a;
      }
      #footer-universel .footer-legal a {
        color: #c9973a;
        text-decoration: none;
        font-weight: bold;
      }
      #footer-universel .footer-legal a:hover {
        text-decoration: underline;
      }
      #footer-universel .footer-devise {
        margin-top: 6px;
        font-style: italic;
        color: #7a9a8a;
        font-size: 0.8rem;
      }
    </style>

    <div class="footer-titre">🐶 Les aventures d'Oldy et Sébastien</div>
    <div class="footer-auteur">TRIBET Sébastien — auteur créateur — 2024–2026</div>
    <div class="footer-contact">
      <a href="mailto:seb.tribet2112@gmail.com">seb.tribet2112 [at] gmail.com</a>
      · 
      <a href="https://oldyetsebastien.fr">oldyetsebastien.fr</a>
    </div>
    <div class="footer-devise">Handicaps invisibles, nous existons.</div>
    <div class="footer-legal">
      © 2024–2026 TRIBET Sébastien – Tous droits réservés &nbsp;|&nbsp;
      <a href="/mentions_legales.html">⚖️ Mentions légales</a>
      &nbsp;|&nbsp;
      Licence <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr" target="_blank">CC BY-NC-ND 4.0</a>
    </div>
  `;

  document.body.appendChild(footer);
})();
